<template>
  <div v-loading="loading">
    <el-input v-model="inputBoxData"
              @blur="blurSet"
    ></el-input>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, onMounted, ref, PropType,
} from 'vue';

export default defineComponent({
  name: 'inputBox',
  props: {
    data: {
      type: Object as PropType<{ index: number, key: string, value: string }>,
      require: true,
    },
  },
  emits: ['set'],
  setup(props, ctx) {
    const inputBoxData = ref('');
    const loading = ref(true);
    const blurSet = () => {
      // console.log('props.data?.index: ', props.data?.index);
      // console.log('props.data?.key: ', props.data?.key);
      // console.log('inputBoxData.value: ', inputBoxData.value);
      loading.value = true;
      const startLoadingTime = new Date().getTime();
      console.log('inputBoxData.value: ', inputBoxData.value);
      ctx.emit('set', {
        index: (props.data as { index: number, key: string, value: string }).index,
        key: (props.data as { index: number, key: string, value: string }).key,
        value: inputBoxData.value,
        callback: (currentValue: string) => {
          const nowTime = new Date().getTime();
          if ((nowTime - startLoadingTime) < 200) {
            setTimeout(() => {
              inputBoxData.value = currentValue;
              loading.value = false;
            }, 200 - (nowTime - startLoadingTime));
          } else {
            inputBoxData.value = currentValue;
            loading.value = false;
          }
        },
      });
      console.log((props.data as { index: number, key: string, value: string }).value);
    };
    onMounted(() => {
      console.log('inputBox props: ', props);
      inputBoxData.value = props.data?.value || '数据加载失败';
      loading.value = false;
    });
    return { inputBoxData, loading, blurSet };
  },
});
</script>

<style scoped lang="scss">

</style>
