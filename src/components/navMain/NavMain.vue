<template>
  <div class="navMain">
    <div class="items" v-for="(value, index) in localDatas" v-bind:key="index">
      <div class="varName">
        <p>{{value.name}}</p>
      </div>
      <div class="itemBox">
        <div class="item" v-for="(item, key) in value.datas" v-bind:key="key">
          <div class="itemKeyName">{{ key }}</div>
          <el-input
            class="itemInputBox"
            v-model="localDatas[index].datas[key]"
            @blur="blurSet(index, key, item)"
            maxlength="10"
            show-word-limit
          ></el-input>
        </div>
      </div>
    </div>
<!--    <div>localDatas: {{localDatas}}</div>-->
<!--    <div>autoDatas: {{autoDatas}}</div>-->
  </div>
</template>

<script lang="ts">
import {
  defineComponent, onMounted, PropType, reactive,
} from 'vue';

export default defineComponent({
  name: 'navMain',
  props: {
    autoDatas: {
      type: Array as PropType<Array<{ name: string, datas: { [propName: string]: string } }>>,
      required: true,
    },
  },
  emits: ['set'],
  setup(props, ctx) {
    const localDatas = reactive([]) as Array<{
      name: string,
      datas: {
        [propName: string]: string
      }
    }>;
    const blurSet = (index: number, key: string, value: string) => {
      ctx.emit('set', {
        index,
        key,
        newValue: value,
      });
      localDatas[index].datas[key] = props.autoDatas[index].datas[key];
    };
    onMounted(() => {
      // console.log(JSON.stringify(props.autoDatas));
      // console.log(JSON.parse(JSON.stringify(props.autoDatas)));
      props.autoDatas.forEach((item) => {
        localDatas.push(JSON.parse(JSON.stringify(item)));
      });
    });
    return {
      localDatas,
      blurSet,
    };
  },
});
</script>

<style lang='scss' scoped>
.navMain {
  width: 100%;
  display: flex;
  flex-direction: column;
  .items {
    display: flex;
    flex-direction: row;
    .varName{
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
    }
    .itemBox{
      width: 100%;
      display: flex;
      flex-direction: row;
      .item {
        flex: 1;
        margin: 30px 30px 30px 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .itemKeyName {
        }
        .itemInputBox {
        }
      }
   }
  }
}
</style>
