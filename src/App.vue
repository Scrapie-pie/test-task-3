<template>
  <div id="app">
    <BlockHeader />
    <FieldSearch />
    <BlockSearchedPrompt />
    <SliderCategories />
    <BlockContentGrid />
  </div>
</template>

<script>
import BlockHeader from './components/BlockHeader.vue';
import FieldSearch from './components/FieldSearch.vue';
import SliderCategories from './components/SliderCategories.vue';
import BlockSearchedPrompt from './components/BlockSearchedPrompt.vue';
import BlockContentGrid from './components/BlockContentGrid.vue';
export default {
  name: 'App',
  components: {
    BlockHeader,
    FieldSearch,
    BlockContentGrid,
    SliderCategories,
    BlockSearchedPrompt,
  }
}
</script>

<style lang="scss">
@import './assets/scss/style';
#app {
  overflow: hidden;
}
</style>
