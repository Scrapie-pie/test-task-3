<template>
  <div class="block-products-marks">
    <ElementMark v-for="(item, i) of 4" :key="i"/>
  </div>
</template>

<script>
import ElementMark from './ElementMark.vue';
export default {
  name: 'BlockProductsMarks',
  components: {
    ElementMark
  }
}
</script>

<style lang="scss" scoped>
.block-products-marks {
  @include flex-it(row, 10px);
  flex-wrap: wrap;
  margin-bottom: 20px;
}
</style>
