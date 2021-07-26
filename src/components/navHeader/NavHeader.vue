<template>
  <div class="navHeader">
    <h2 class="text">Auto Xml Helper</h2>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavHeader',
});
</script>

<style scoped lang="scss">
.navHeader{
  display: flex;
  flex-direction: column;
  align-items: center;
  .text{}
}
</style>
