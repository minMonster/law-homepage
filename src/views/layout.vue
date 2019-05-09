<!-- crated：2019/4/24  author：Monster  -->
<template>
    <div class='layout'>
        <v-nav :theme="'white'"></v-nav>
        <router-view></router-view>
        <v-footer></v-footer>
    </div>
</template>

<script>
  import VNav from '@/components/v-nav.vue';
  import VFooter from '@/components/v-footer.vue';

  export default {
    name: 'layout',
    components: {
      VNav, VFooter
    }
  };
</script>
<style rel="stylesheet/scss" lang="scss">
    .layout {
    }
</style>
