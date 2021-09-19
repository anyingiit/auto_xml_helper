<template>
  <div class="home">
    <div class="main" v-if="!loadingStatus.loading">
      <nav-header class="navHeader"></nav-header>
      <nav-main class="navMain" v-if="autoRequiresDatas.length > 0"
                :autoDatas="autoRequiresDatas"
                @set="set"
      ></nav-main>
      <nav-footer class="navFooter" @xmlSave="xmlSave"></nav-footer>
    </div>
    <div v-else style="height: 100%; width: 100%">
      <loading id="loading" :loadingStatus="loadingStatus"></loading>
    </div>
<!--    <div>{{loadingStatus}}</div>-->
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  onMounted,
} from 'vue';
import navHeader from '@/components/navHeader/NavHeader.vue';
import navMain from '@/components/navMain/NavMain.vue';
import navFooter from '@/components/navFooter/NavFooter.vue';
import loading from '@/components/loading/Loading.vue';
import XmlHelper from '@/models/XmlHelper';
import xmlStrData from '@/assets/xmlRowData';
import { ElMessage, ElNotification } from 'element-plus';
import { demoMode } from '@/conf/config';
import { ipcRenderer } from 'electron';
import useLoading from '@/components/loading/useLoading';

export default defineComponent({
  name: 'Home',
  components: {
    navHeader,
    navMain,
    navFooter,
    loading,
  },
  setup() {
    const { loadingStatus, startLoading, completeTask } = useLoading();
    const autoTarget = ref([
      {
        name: 'CO_EGR',
        requires: ['lowerbound', 'upperbound', 'value'],
      },
      {
        name: 'DJW',
        requires: ['lowerbound', 'upperbound', 'value'],
      },
      {
        name: 'DJY',
        requires: ['lowerbound', 'upperbound', 'value'],
      },
      {
        name: 'DSB',
        requires: ['lowerbound', 'upperbound', 'value'],
      },
      {
        name: 'EGR',
        requires: ['lowerbound', 'upperbound', 'value'],
      },
      {
        name: 'EVT',
        requires: ['lowerbound', 'upperbound', 'value'],
      },
      {
        name: 'GPF',
        requires: ['lowerbound', 'upperbound', 'value'],
      },
      {
        name: 'HInj',
        requires: ['lowerbound', 'upperbound', 'value'],
      },
      {
        name: 'IVT',
        requires: ['lowerbound', 'upperbound', 'value'],
      },
      {
        name: 'LIVC',
        requires: ['lowerbound', 'upperbound', 'value'],
      },
      {
        name: 'RF',
        requires: ['lowerbound', 'upperbound', 'value'],
      },
      {
        name: 'ST',
        requires: ['lowerbound', 'upperbound', 'value'],
      },
      {
        name: 'TWC',
        requires: ['lowerbound', 'upperbound', 'value'],
      },
      {
        name: 'CO_EGR',
        requires: ['value'],
      },
      {
        name: 'CO_GPF',
        requires: ['value'],
      },
      {
        name: 'CO_HInj',
        requires: ['value'],
      },
      {
        name: 'CO_Primary',
        requires: ['value'],
      },
      {
        name: 'CO_TWC',
        requires: ['value'],
      },
      {
        name: 'NOx_EGR',
        requires: ['value'],
      },
      {
        name: 'NOx_GPF',
        requires: ['value'],
      },
      {
        name: 'NOx_HInj',
        requires: ['value'],
      },
      {
        name: 'NOx_Primary',
        requires: ['value'],
      },
      {
        name: 'NOx_TWC',
        requires: ['value'],
      },
      {
        name: 'PM_EGR',
        requires: ['value'],
      },
      {
        name: 'PM_GPF',
        requires: ['value'],
      },
      {
        name: 'PM_HInj',
        requires: ['value'],
      },
      {
        name: 'PM_Primary',
        requires: ['value'],
      },
      {
        name: 'PM_TWC',
        requires: ['value'],
      },
      {
        name: 'P_CR',
        requires: ['value'],
      },
      {
        name: 'P_DJW',
        requires: ['value'],
      },
      {
        name: 'P_EGR',
        requires: ['value'],
      },
      {
        name: 'P_DJW',
        requires: ['value'],
      },
      {
        name: 'P_EVT',
        requires: ['value'],
      },
      {
        name: 'P_GPF',
        requires: ['value'],
      }, {
        name: 'P_HInj',
        requires: ['value'],
      }, {
        name: 'P_IVT',
        requires: ['value'],
      }, {
        name: 'P_LIVC',
        requires: ['value'],
      },
      {
        name: 'P_RF1',
        requires: ['value'],
      },
      {
        name: 'P_RF2',
        requires: ['value'],
      },
      {
        name: 'P_RF3',
        requires: ['value'],
      },
      {
        name: 'P_TWC',
        requires: ['value'],
      },
      {
        name: 'THC_EGR',
        requires: ['value'],
      },
      {
        name: 'THC_GPF',
        requires: ['value'],
      },
      {
        name: 'THC_HInj',
        requires: ['value'],
      },
      {
        name: 'THC_Primary',
        requires: ['value'],
      },
      {
        name: 'THC_TWC',
        requires: ['value'],
      },
    ]);
    let xmlHelper: XmlHelper;
    const autoRequiresDatas = reactive([]) as Array< {
      name: string,
      datas: {
        [propName: string]: string
      }
    } >;
    const set = (param: {index: number,
                          key: string, newValue: string,
                          callback: (currentValue: string) => void}) => {
      const {
        index, key, newValue, callback,
      } = param;
      // console.log(param);
      // console.log(autoRequiresDatas[index]);
      if (autoRequiresDatas[index].datas[key] === newValue) {
        callback(autoRequiresDatas[index].datas[key]);
        return;
      }
      const targetVar: Element = xmlHelper
        .getDesignsDBVar(autoRequiresDatas[index].name) as Element;
      if (!(/^(-?\d+)(\.\d+)?$/.test(newValue))) {
        ElNotification({
          title: '错误',
          message: '输入的值包含非法字符',
          duration: 2500,
        });
        callback(autoRequiresDatas[index].datas[key]);
        return;
      }
      if (Number.isNaN(parseFloat(newValue))) {
        ElNotification({
          title: '错误',
          message: '输入的字符不是数字',
          duration: 2500,
        });
        callback(autoRequiresDatas[index].datas[key]);
        return;
      }
      if ((newValue.indexOf('.') !== -1) && (newValue.length - (newValue.indexOf('.') + 1)) > 1) {
        ElMessage.warning({
          message: '您输入的小数大于一位, 已帮您修正!',
          type: 'warning',
        });
      }
      // WARN: 注意这里潜在的风险, 如果在该变量仅仅支持INT类型, 在加入'.0'后是否会造成专业软件无法识别的问题?
      const newValueFormatted = parseFloat(newValue).toFixed(1).toString();
      // 设置完成后进行数据验证, 数据验证完毕子组件根据props.autoDatas获取值更新到自己的输入框
      targetVar.setAttribute(key, newValueFormatted);
      if (targetVar.getAttribute(key) === newValueFormatted) {
        ElNotification({
          title: '成功',
          message: '记录成功',
          type: 'success',
          duration: 1200,
        });
        // console.log('check pass!');
        autoRequiresDatas[index].datas[key] = newValueFormatted;
        // console.log(xmlHelper.getXmlStr());
        callback(newValueFormatted);
      } else {
        ElNotification({
          title: '致命错误',
          message: '记录失败...',
          duration: 0,
          showClose: false,
        });
        // console.log('check faild!');
        callback(autoRequiresDatas[index].datas[key]);
      }
    };
    const xmlSave = () => {
      // console.log(xmlHelper.getXmlStr());
      startLoading(2, ['备份xml旧文件', '写入新xml文件']);
      const date = new Date();
      const dateStr = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}_${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`;
      ipcRenderer.send('xmlFileBackup', {
        date: dateStr,
      });
    };
    ipcRenderer.on('xmlFileBackup-reply', (event, args: {status: boolean, data: unknown}) => {
      const { status, data } = args;
      if (status) {
        completeTask();
        ipcRenderer.send('writeXmlFileFromStr', {
          data: xmlHelper.getXmlStr(),
        });
      } else {
        ElNotification({
          title: '致命错误',
          message: `重命名失败: ${data}`,
          duration: 0,
          showClose: false,
        });
      }
    });
    ipcRenderer.on('writeXmlFileFromStr-reply', (event, args: {status: boolean, data: unknown}) => {
      const { status, data } = args;
      if (status) {
        completeTask();
        ElNotification({
          title: '成功',
          message: '备份并写入文件成功!',
          type: 'success',
          duration: 2500,
        });
      } else {
        ElNotification({
          title: '致命错误',
          message: `写入新文件失败: ${data}`,
          duration: 0,
          showClose: false,
        });
      }
    });
    onMounted(() => {
      if (demoMode) {
        xmlHelper = new XmlHelper(xmlStrData);
      } else {
        // console.log('startLoading');
        startLoading(2, ['加载本地xml文件', '构建xml数据']);
        const xmlStr: string = ipcRenderer.sendSync('readXmlFileToStr');
        // console.log('completeTask');
        completeTask();
        xmlHelper = new XmlHelper(xmlStr);
      }
      autoTarget.value.forEach((item) => {
        const tmp: { [key: string]: string } = {};
        item.requires.forEach((property) => {
          const targetVar: Element = xmlHelper.getDesignsDBVar(item.name) as Element;
          tmp[property] = (targetVar.getAttribute(property)) as string;
        });
        autoRequiresDatas.push({
          name: item.name,
          datas: tmp,
        });
      });
      // console.log(`now: ${autoRequiresDatas}`);
      completeTask();
    });
    return {
      autoRequiresDatas,
      xmlSave,
      set,
      loadingStatus,
    };
  },
});
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .main{
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    .navHeader{
      flex: 1;
    }
    .navMain{
      flex: 5;
      overflow: auto;
      max-height: 100%;
    }
    .navFooter{
      flex: 1;
    }
  }
  #loading{
    height: 100%;
    width: 100%;
  }
}
</style>
