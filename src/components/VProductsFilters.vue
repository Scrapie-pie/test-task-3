<template>
  <div class="v-products-filters">
    <VProductsFiltersCategories class="categories"/>
    <VProductsFiltersPrice class="price"/>
    <BlockFilterBrand />
  </div>
</template>

<script>
import VProductsFiltersCategories from './VProductsFiltersCategories.vue';
import VProductsFiltersPrice from './VProductsFiltersPrice.vue';
import BlockFilterBrand from './BlockFilterBrand.vue';
export default {
  name: 'ProductsFilters',
  data() {
    return {
      value: ''
    }
  },
  components: {
    VProductsFiltersCategories,
    VProductsFiltersPrice,
    BlockFilterBrand
  }
}
</script>

<style lang="scss" scoped>
.v-products-filters {

  .categories {
    margin-bottom: 45px;
  }
  .price {
    margin-bottom: 30px;
  }
}
</style>
