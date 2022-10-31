<template>
  <div class="block-aside">
    <BlockAsideCategories/>
    <BlockFilters />
  </div>
</template>

<script>
import BlockAsideCategories from './BlockAsideCategories.vue';
import BlockFilters from './BlockFilters.vue';
export default {
  name: 'BlockAside',
  components: {
    BlockAsideCategories,
    BlockFilters
  }
}
</script>

<style lang="scss">
.block-aside {
  @include flex-it(column, 45px);
}
</style>
