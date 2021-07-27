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
    <div>localDatas: {{localDatas}}</div>
    <div>autoDatas: {{autoDatas}}</div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, onMounted, reactive,
} from 'vue';

export default defineComponent({
  name: 'navMain',
  props: {
    autoDatas: {
      type: Array,
      required: true,
    },
  },
  // emits: ['checkAndSet'],
  emits: ['set'],
  setup(props, ctx) {
    // const trueDatas = reactive(props.autoDatas);
    // const blurTester = (index, key, value) => {
    //   console.log(
    //     '🚀 ~ file: NavMain.vue ~ line 56 ~ blurTester ~ index, key, value',
    //     index,
    //     key,
    //     value,
    //   );
    //   if (/^(-?\d+)(\.\d+)?$/.test(value)) {
    //     if (!Number.isNaN(parseFloat(value))) {
    //       console.log(parseFloat(value).toString());
    //       if (value.indexOf('.') !== -1) {
    //         if ((value.length - (value.indexOf('.') + 1)) > 1) {
    //           ElMessage.warning({
    //             message: '您输入的小数大于一位, 已帮您修正!',
    //             type: 'warning',
    //           });
    //         }
    //       }
    //
    //       trueDatas[index].datas[key] = parseFloat(value).toFixed(1).toString();
    //       ctx.emit('checkAndSet', {
    //         index,
    //         key,
    //       });
    //     } else {
    //       ElNotification({
    //         title: '错误',
    //         message: '输入的字符不是数字',
    //         duration: 2500,
    //       });
    //     }
    //   } else {
    //     ElNotification({
    //       title: '错误',
    //       message: '输入的值包含非法字符',
    //       duration: 2500,
    //     });
    //   }
    // };
    const syncAutoDatas = props.autoDatas as Array<{
      name: string,
      datas: {
        [propName: string]: string
      }
    }>;
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
      localDatas[index].datas[key] = syncAutoDatas[index].datas[key];
    };
    onMounted(() => {
      console.log(JSON.stringify(props.autoDatas));
      console.log(JSON.parse(JSON.stringify(props.autoDatas)));
      syncAutoDatas.forEach((item) => {
        localDatas.push(JSON.parse(JSON.stringify(item)));
      });
    });
    return {
      // blurTester,
      // trueDatas,
      syncAutoDatas,
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
        width: 33%;
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
