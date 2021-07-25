<template>
  <div class="navMain">
    <div class="items" v-for="(value, index) in trueDatas" v-bind:key="index">
      <div class="item" v-for="(item, key) in value.datas" v-bind:key="key">
        <div class="itemKeyName">{{ key }}</div>
        <el-input
          class="itemInputBox"
          v-model="trueDatas[index].datas[key]"
          @blur="blurTester(index, key, item)"
        ></el-input>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  name: 'navMain',
  props: {
    autoDatas: {
      type: Array,
      required: true,
    },
  },
  emits: ['set'],
  setup(props, ctx) {
    const fackDatas = reactive([
      {
        name: 'CO_EGR',
        datas: {
          value: '-100',
          scale: '0',
          shape2: '0',
        },
      },
      {
        name: 'CO_GPF',
        datas: {
          value: '0.0',
          scale: '0',
          shape2: '0',
        },
      },
    ]);
    const trueDatas = reactive(props.autoDatas);
    // for (let i = 0; i < datas.value.length; i += 1) {
    //   watch(datas.value[i], (newValue, oldValue) => {
    //     console.log('NavMain.vue ~ line 52 ~ watch ~ newValue, oldValue', newValue, oldValue);
    //   });
    // }
    const blurTester = (index, key, value) => {
      console.log(
        '🚀 ~ file: NavMain.vue ~ line 56 ~ blurTester ~ index, key, value',
        index,
        key,
        value,
      );
      ctx.emit('set', {
        index,
        key,
        newValue: value,
      });
    };
    return {
      fackDatas,
      blurTester,
      trueDatas,
    };
  },
});
</script>

<style lang='scss' scoped>
.navMain {
  display: flex;
  flex-direction: column;
  .items {
    display: flex;
    flex-direction: row;
    .item {
      .itemKeyName {
      }
      .itemInputBox {
      }
    }
  }
}
</style>
