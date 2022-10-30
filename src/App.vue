<template>
  <div id="app">
    <VHeader />
    <FieldSearch />
    <SearchWhat />
    <SliderCategories />
    <VProducts></VProducts>
  </div>
</template>

<script>
import VHeader from './components/VHeader.vue';
import TheFooter from './components/TheFooter.vue';
import FieldSearch from './components/FieldSearch.vue';
//import VProducts from './components/VProducts.vue';
import SliderCategories from './components/SliderCategories.vue';
import SearchWhat from './components/SearchWhat.vue';
import VProducts from './components/VProducts.vue';

export default {
  name: 'App',
  data() {
    
  },
  components: {
    VHeader,
    TheFooter,
    FieldSearch,
    VProducts,
    SliderCategories,
    SearchWhat,
  }
}
</script>

<style lang="scss">
@import './assets/scss/style';

#app {

  overflow: hidden;

}
</style>
