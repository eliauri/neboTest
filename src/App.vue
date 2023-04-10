<template>
  <MyMap   @changeAdress="changeAdress"/>
</template>

<script>
import MyMap from '@/components/MyMap.vue';

export default {
  name: 'App',
  components: {
    MyMap,
  },
  data() {
    return {
      adress: 'sdas',
    };
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
}
</style>
