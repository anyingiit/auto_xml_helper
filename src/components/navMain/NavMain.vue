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
    const trueDatas = reactive(props.autoDatas);
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
