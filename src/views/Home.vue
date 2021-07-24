<template>
  <div class="home">
    <nav-header></nav-header>
    <nav-main></nav-main>
    <nav-footer></nav-footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import navHeader from '@/components/navHeader/NavHeader.vue';
import navMain from '@/components/navMain/NavMain.vue';
import navFooter from '@/components/navFooter/NavFooter.vue';

export default defineComponent({
  name: 'Home',
  components: {
    navHeader,
    navMain,
    navFooter,
  },
});
</script>
