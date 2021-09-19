<template>
  <div class="navMain" v-loading="loading">
    <div class="dataColumnLeft">
      <div class="column"
           v-for="(varItem, varItemIndex) in localDatasLeft"
           v-bind:key="varItemIndex">
        <div class="varName">{{ varItem.name }}</div>
        <div class="props">
          <div class="prop"
               v-for="(propValue, propItemKey) in varItem.datas"
               v-bind:key="propItemKey">
            <div class="propHeader">
              <div class="varKey">{{ propItemKey }}</div>
            </div>
            <div class="propFooter">
              <InputBox class="propInputBox"
                        :data="{index: varItem.index,
                              key: propItemKey,
                              value: propValue}"
                        @set="inputBoxSet"
              ></InputBox>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="dataColumnRight">
      <div class="column"
           v-for="(varItem, varItemIndex) in localDatasRight"
           v-bind:key="varItemIndex">
        <div class="varName" style="flex: 3">{{ varItem.name }}</div>
        <div class="props" style="flex: 7">
          <div class="prop"
               v-for="(propValue, propItemKey) in varItem.datas"
               v-bind:key="propItemKey">
            <div class="propHeader">
              <div class="varKey">{{ propItemKey }}</div>
            </div>
            <div class="propFooter">
              <InputBox class="propInputBox"
                        :data="{index: varItem.index,
                              key: propItemKey,
                              value: propValue}"
                        @set="inputBoxSet"
              ></InputBox>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, onMounted, PropType, reactive, ref,
} from 'vue';
import InputBox from '@/components/navMain/inputBox/InputBox.vue';

export default defineComponent({
  name: 'navMain',
  components: {
    InputBox,
  },
  props: {
    autoDatas: {
      type: Array as PropType<Array<{ name: string, datas: { [propName: string]: string } }>>,
      required: true,
    },
  },
  emits: ['set'],
  setup(props, ctx) {
    const localDatasLeft = reactive([]) as Array<{
      index: number,
      name: string,
      datas: {
        [propName: string]: string
      }
    }>;
    const localDatasRight = reactive([]) as Array<{
      index: number,
      name: string,
      datas: {
        [propName: string]: string
      }
    }>;
    const loading = ref(true);
    const inputBoxSet = (param: {
                        index: number,
                        key: string,
                        value: string,
                        callback: (currentValue: string) => void}) => {
      const {
        index, key, value, callback,
      } = param;
      // console.log('inputBoxSet: index: ', index, 'key: ', key, 'value: ', value);
      ctx.emit('set', {
        index,
        key,
        newValue: value,
        callback: (currentValue: string) => {
          callback(currentValue);
        },
      });
    };
    onMounted(() => {
      // console.log(JSON.stringify(props.autoDatas));
      // console.log(JSON.parse(JSON.stringify(props.autoDatas)));
      // console.log(`data: ${props.autoDatas.values()}`);
      props.autoDatas.forEach((item, index) => {
        if (Object.keys(item.datas).length > 1) {
          localDatasLeft.push({
            index,
            name: item.name,
            datas: item.datas,
          });
        } else {
          localDatasRight.push({
            index,
            name: item.name,
            datas: item.datas,
          });
        }
      });
      loading.value = false;
    });
    return {
      localDatasLeft,
      localDatasRight,
      inputBoxSet,
      loading,
    };
  },
});
</script>

<style lang='scss' scoped>
.navMain{
  width: 100%;
  display: flex;
  flex-direction: row;
  .dataColumnLeft, .dataColumnRight{
    display: flex;
    flex-direction: column;
    .column{
      display: flex;
      flex-direction: row;
      .varName{
        flex: 1;
        display: flex;
        flex-direction: column;
        text-align: right;
        align-content: center;
        justify-content: center;
        font-size: 1.2vw;
      }
      .props{
        flex: 9;
        display: flex;
        flex-direction: row;
        .prop{
          flex: 1;
          display: flex;
          flex-direction: column;
          margin-bottom: 15px;
          .propHeader{
            flex: 2;
            display: flex;
            flex-direction: row;
            .varKey{
              flex: 7;
              font-size: 1vw;
            }
          }
          .propFooter{
            flex: 7;
            display: flex;
            flex-direction: row;
            .varName{
              flex: 3;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-content: center;
              text-align: right;
              //max-width: 80px;
              font-size: 1.25vw;
            }
            .propInputBox{
              flex: 7;
            }
          }
        }
      }
    }
  }
  .dataColumnLeft{
    flex: 7;
  }
  .dataColumnRight{
    flex: 3;
  }
}
</style>
