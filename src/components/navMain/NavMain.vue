<template>
  <div class="navMain">
    <div class="items" v-for="(value, index) in trueDatas" v-bind:key="index">
      <div class="varName">
        <p>{{value.name}}</p>
      </div>
      <div class="itemBox">
        <div class="item" v-for="(item, key) in value.datas" v-bind:key="key">
          <div class="itemKeyName">{{ key }}</div>
          <el-input
            class="itemInputBox"
            v-model="trueDatas[index].datas[key]"
            @blur="blurTester(index, key, item)"
            maxlength="10"
            show-word-limit
          ></el-input>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue';
import { ElNotification, ElMessage } from 'element-plus';

export default defineComponent({
  name: 'navMain',
  props: {
    autoDatas: {
      type: Array,
      required: true,
    },
  },
  emits: ['checkAndSet'],
  setup(props, ctx) {
    const trueDatas = reactive(props.autoDatas);
    const blurTester = (index, key, value) => {
      console.log(
        '🚀 ~ file: NavMain.vue ~ line 56 ~ blurTester ~ index, key, value',
        index,
        key,
        value,
      );
      if (/^(-?\d+)(\.\d+)?$/.test(value)) {
        if (!Number.isNaN(parseFloat(value))) {
          console.log(parseFloat(value).toString());
          if (value.length - (value.indexOf('.') + 1) > 1) {
            ElMessage.warning({
              message: '您输入的小数大于一位, 已帮您修正!',
              type: 'warning',
            });
          }
          trueDatas[index].datas[key] = parseFloat(value).toFixed(1).toString();
          ctx.emit('checkAndSet', {
            index,
            key,
          });
        } else {
          ElNotification({
            title: '错误',
            message: '输入的字符不是数字',
            duration: 2500,
          });
        }
      } else {
        ElNotification({
          title: '错误',
          message: '输入的值包含非法字符',
          duration: 2500,
        });
      }
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
