<template>
  <div class="navFooter">
    <el-button class="xmlSaveButton" @click="xmlSave" type="primary">xmlSave</el-button>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavFooter',
  emits: ['xmlSave'],
  setup(props, ctx) {
    const xmlSave = () => {
      ctx.emit('xmlSave');
    };
    return {
      xmlSave,
    };
  },
});
</script>

<style scoped lang="scss">
.navFooter{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  .xmlSaveButton{
    //margin-right: 15%;
  }
}
</style>
