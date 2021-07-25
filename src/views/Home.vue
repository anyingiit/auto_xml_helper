<template>
  <div class="home">
    <nav-header></nav-header>
    <nav-main :autoDatas="autoRequiresDatasTest" @set="set"></nav-main>
    <nav-footer></nav-footer>
    <div>{{ autoRequiresDatasTest }}</div>
    <button @click="set(0, 'scale', 'aaaa')" style="height: 50px;"></button>
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
    const autoRequiresDatasTest = reactive([]) as Array<{
      name: string,
      datas: {
        [propName: string]: string
      }
    }>;
    const setTest = () => {
      (xmlHelper.getDesignsDBVar('CO_EGR') as Element).setAttribute('scale', '666');
    };
    const set = (param: {index: number, key: string, newValue: string}) => {
      const { index, key, newValue } = param;
      console.log('-> index: number, key: string, newValue: string', index, key, newValue);
      console.log('-> autoRequiresDatasTest', autoRequiresDatasTest);
      // autoRequiresDatasTest[index].datas[key] = newValue;
      (xmlHelper.getDesignsDBVar(autoRequiresDatasTest[index].name) as Element)
        .setAttribute(key, newValue);
    };
    onMounted(() => {
      autoTarget.value.forEach((item) => {
        const tmp: { [key: string]: string } = {};
        item.requires.forEach((property) => {
          tmp[property] = (xmlHelper
            .getDesignsDBVar(item.name) as Element)
            .getAttribute(property) as string;
        });
        autoRequiresDatasTest.push({
          name: item.name,
          datas: tmp,
        });
      });
    });
    return {
      setTest,
      autoRequiresDatasTest,
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
