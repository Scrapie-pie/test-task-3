<template>
  <div class="block-searched-content">
    <BlockProductsSort />
    <BlockProductsMarks />
    <BlockProductCards />
    <BlockPagination class="block-searched-content__pagination"></BlockPagination>
  </div>
</template>

<script>
import BlockProductsSort from './BlockProductsSort.vue';
import BlockProductsMarks from './BlockProductsMarks.vue';
import BlockProductCards from './BlockProductCards.vue';
import BlockPagination from './BlockPagination.vue';
export default {
  name: 'BlockSearchedContent',
  components: {
    BlockProductsSort,
    BlockProductsMarks,
    BlockProductCards,
    BlockPagination
  }
}
</script>

<style lang="scss">
.block-searched-content {
  display: flex;
  flex-direction: column;
  @include media($max: md) {
    &__pagination {
      align-self: center;
    }
  }
}
</style>
