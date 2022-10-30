<template>
  <div class="v-products-list">
    <VProductsCard />
    <VProductsCard />
    <VProductsCard />
    <VProductsCard />
    <VProductsCard />
    <VProductsCard />
    <VProductsCard />
    <VProductsCard />
    <VProductsCard />
  </div>
</template>

<script>
import BaseButton from './BaseButton.vue';
import VProductsCard from './VProductsCard.vue';
export default {
  name: 'VProductsList',
  data() {
    return {
      value: ''
    }
  },
  components: {
    BaseButton,
    VProductsCard
  }
}
</script>

<style lang="scss" scoped>
.v-products-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 260px));
  gap: 40px 15px;
  justify-content: space-between;
}
</style>
