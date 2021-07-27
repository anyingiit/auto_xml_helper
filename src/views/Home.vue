<template>
  <div class="home">
    <nav-header></nav-header>
    <nav-main v-if="autoRequiresDatas.length > 0"
              :autoDatas="autoRequiresDatas"
              @set="set"
    ></nav-main>
    <nav-footer @xmlSave="xmlSave"></nav-footer>
<!--    <div>{{ autoRequiresDatas }}</div>-->
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
import XmlHelper from '@/models/XmlHelper';
import xmlRowData from '@/assets/xmlRowData';
import { ElMessage, ElNotification } from 'element-plus';
import { demoMode } from '@/conf/config';

export default defineComponent({
  name: 'Home',
  components: {
    navHeader,
    navMain,
    navFooter,
  },
  setup() {
    const autoTarget = ref([
      {
        name: 'CO_EGR',
        requires: ['scale', 'tolerance', 'value'],
      },
      {
        name: 'CO_GPF',
        requires: ['scale', 'tolerance', 'value'],
      },
      {
        name: 'CO_HInj',
        requires: ['scale', 'tolerance', 'value'],
      },
    ]);
    let xmlHelper: XmlHelper;
    const autoRequiresDatas = reactive([]) as Array<{
      name: string,
      datas: {
        [propName: string]: string
      }
    }>;
    const set = (param: {index: number, key: string, newValue: string}) => {
      const { index, key, newValue } = param;
      if (autoRequiresDatas[index].datas[key] === newValue) { return; }
      const targetVar: Element = xmlHelper
        .getDesignsDBVar(autoRequiresDatas[index].name) as Element;
      if (!(/^(-?\d+)(\.\d+)?$/.test(newValue))) {
        ElNotification({
          title: '错误',
          message: '输入的值包含非法字符',
          duration: 2500,
        });
        return;
      }
      if (Number.isNaN(parseFloat(newValue))) {
        ElNotification({
          title: '错误',
          message: '输入的字符不是数字',
          duration: 2500,
        });
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
        console.log('check pass!');
        autoRequiresDatas[index].datas[key] = newValueFormatted;
        // console.log(xmlHelper.getXmlStr());
      } else {
        ElNotification({
          title: '错误',
          message: '记录失败...',
          duration: 0,
          showClose: false,
        });
        console.log('check faild!');
      }
    };
    const xmlSave = () => {
      console.log(xmlHelper.getXmlStr());
    };
    onMounted(() => {
      if (demoMode) {
        xmlHelper = new XmlHelper(xmlRowData);
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
    });
    return {
      autoRequiresDatas,
      xmlSave,
      set,
    };
  },
});
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
}
</style>
