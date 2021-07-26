<template>
  <div class="home">
    <nav-header></nav-header>
    <nav-main :autoDatas="autoRequiresDatas" @checkAndSet="checkAndSet"></nav-main>
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
import { ElNotification } from 'element-plus';

export default defineComponent({
  name: 'Home',
  components: {
    navHeader,
    navMain,
    navFooter,
  },
  setup() {
    const autoTarget = ref([{
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
    const xmlHelper = new XmlHelper(xmlRowData);
    const autoRequiresDatas = reactive([]) as Array<{
      name: string,
      datas: {
        [propName: string]: string
      }
    }>;
    const autoRequiresDatasSync = reactive([]) as Array<{
      name: string,
      datas: {
        [propName: string]: string
      }
    }>;
    const checkAndSet = (param: {index: number, key: string}) => {
      const { index, key } = param;
      console.log('-> index: number, key: string, ', index, key);
      console.log('-> autoRequiresDatas[index].datas[key]', autoRequiresDatas[index].datas[key]);
      console.log('-> autoRequiresDatasSync[index].datas[key]', autoRequiresDatasSync[index].datas[key]);
      // console.log('-> autoRequiresDatasTest', autoRequiresDatasTest);
      // autoRequiresDatasTest[index].datas[key] = newValue;
      const targetVar: Element = xmlHelper
        .getDesignsDBVar(autoRequiresDatas[index].name) as Element;
      if (autoRequiresDatasSync[index].datas[key] !== autoRequiresDatas[index].datas[key]) {
        console.log('has diff');

        targetVar.setAttribute(key, autoRequiresDatas[index].datas[key]);

        if (targetVar.getAttribute(key) === autoRequiresDatas[index].datas[key]) {
          ElNotification({
            title: '成功',
            message: '记录成功',
            type: 'success',
            duration: 1200,
          });
          console.log('check pass!');
          autoRequiresDatasSync[index].datas[key] = autoRequiresDatas[index].datas[key];
          // console.log(xmlHelper.getXmlStr());
        } else {
          ElNotification({
            title: '错误',
            message: '记录失败...',
            duration: 0,
            showClose: false,
          });
          console.log('check faild!');// TODO: 弹出错误提示框, 提示数据修改失败!
        }
      }
    };
    const xmlSave = () => {
      console.log(xmlHelper.getXmlStr());
    };
    onMounted(() => {
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

      autoRequiresDatas.forEach((item) => {
        autoRequiresDatasSync.push(JSON.parse(JSON.stringify(item)));
      });
    });
    return {
      autoRequiresDatas,
      checkAndSet,
      xmlSave,
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
