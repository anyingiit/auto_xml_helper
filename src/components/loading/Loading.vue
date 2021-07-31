<template>
  <div class="loading">
<!--    <div>{{loadingStatus}}</div>-->
    <el-steps :active="loadingStatus.tasksDone" finish-status="success">
      <el-step v-for="(value, index) in loadingStatus.taskDetails"
               v-bind:key="index"
               :title="'步骤' + (index + 1)"
               :description="value"
      > </el-step>
    </el-steps>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, onMounted, PropType,
} from 'vue';

export default defineComponent({
  name: 'Loading',
  props: {
    loadingStatus: {
      type: Object as PropType<{
        loading: boolean,
        tasksTotal: number,
        tasksDone: number,
        taskDetails: Array<string>
      }>,
      required: true,
    },
  },
  setup(props) {
    onMounted(() => {
      console.log(props.loadingStatus);
    });
    return {
    };
  },
});
</script>

<style scoped lang="scss">
.loading{
  background-color: white;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 15%;
}
</style>
