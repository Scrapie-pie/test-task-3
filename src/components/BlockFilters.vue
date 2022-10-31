<template>
  <div class="block-filters">
    <BlockFilterPrice />
    <BlockFilterBrand />
  </div>
</template>

<script>
import BlockFilterPrice from './BlockFilterPrice.vue';
import BlockFilterBrand from './BlockFilterBrand.vue';
export default {
  name: 'BlockFilters',
  components: {
    BlockFilterPrice,
    BlockFilterBrand
  }
}
</script>

<style lang="scss">
.block-filters {
  @include flex-it(column, 25px);

  @include media($max: md) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @include media($max: sm) {
    grid-template-columns: 1fr;
  }
}
</style>
