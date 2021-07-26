<template>
  <div class="home">
    <nav-header></nav-header>
    <nav-main :autoDatas="autoRequiresDatas" @checkAndSet="checkAndSet"></nav-main>
    <nav-footer></nav-footer>
    <div>{{ autoRequiresDatas }}</div>
    <div>{{xmlRowDataStr}}</div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  onMounted, computed,
} from 'vue';
import navHeader from '@/components/navHeader/NavHeader.vue';
import navMain from '@/components/navMain/NavMain.vue';
import navFooter from '@/components/navFooter/NavFooter.vue';
import XmlHelper from '@/models/XmlHelper';
import xmlRowData from '@/assets/xmlRowData';

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
    const xmlRowDataStr = computed(() => (xmlHelper.getDesignsDBVar('CO_EGR') as Element).getAttribute('value')).value;
    const checkAndSet = (param: {index: number, key: string}) => {
      const { index, key } = param;
      console.log('-> index: number, key: string, ', index, key);
      console.log('-> autoRequiresDatas[index].datas[key]', autoRequiresDatas[index].datas[key]);
      console.log('-> autoRequiresDatasSync[index].datas[key]', autoRequiresDatasSync[index].datas[key]);
      // console.log('-> autoRequiresDatasTest', autoRequiresDatasTest);
      // autoRequiresDatasTest[index].datas[key] = newValue;
      if (autoRequiresDatasSync[index].datas[key] !== autoRequiresDatas[index].datas[key]) {
        console.log('has diff');

        (xmlHelper.getDesignsDBVar(autoRequiresDatas[index].name) as Element)
          .setAttribute(key, autoRequiresDatas[index].datas[key]);

        if ((xmlHelper.getDesignsDBVar(autoRequiresDatas[index].name) as Element)
          .getAttribute(key) === autoRequiresDatas[index].datas[key]) {
          console.log('check pass!');
          autoRequiresDatasSync[index].datas[key] = autoRequiresDatas[index].datas[key];
          // console.log(xmlHelper.getXmlStr());
          console.log(xmlRowDataStr);
        } else {
          console.log('check faild!');// TODO: 弹出错误提示框, 提示数据修改失败!
        }
      }
    };
    onMounted(() => {
      autoTarget.value.forEach((item) => {
        const tmp: { [key: string]: string } = {};
        item.requires.forEach((property) => {
          tmp[property] = (xmlHelper
            .getDesignsDBVar(item.name) as Element)
            .getAttribute(property) as string;
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
      xmlRowDataStr,
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
