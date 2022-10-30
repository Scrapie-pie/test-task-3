<template>
  <div class="v-products-view">
    <VProductsSortBy></VProductsSortBy>
    <VProductsClarifications></VProductsClarifications>
    <VProductsList></VProductsList>
    <VProductsPagination></VProductsPagination>
  </div>
</template>

<script>
import VProductsSortBy from './VProductsSortBy.vue';
import VProductsClarifications from './VProductsClarifications.vue';
import VProductsList from './VProductsList.vue';
import VProductsPagination from './VProductsPagination.vue';
export default {
  name: 'VProductsView',
  data() {
    return {
      value: ''
    }
  },
  components: {
    VProductsSortBy,
    VProductsClarifications,
    VProductsList,
    VProductsPagination
  }
}
</script>

<style lang="scss" scoped>
.v-products-view {


}
</style>
