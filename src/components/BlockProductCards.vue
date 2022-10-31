<template>
  <div class="block-product-cards">
    <BlockProductCard
      v-for="item of 9"
      image="https://i.pinimg.com/736x/f4/d2/96/f4d2961b652880be432fb9580891ed62.jpg"
      name="Наименование товара, которое не более 2 строк"
      price="ХХ ХХХ"
      oldPrice="ХХ ХХХ"
      buttonText="Кнопка"
    />
  </div>
</template>

<script>
import BlockProductCard from './BlockProductCard.vue';
export default {
  name: 'BlockProductCards',
  components: {
    BlockProductCard
  }
}
</script>

<style lang="scss">
.block-product-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 40px 15px;
  justify-content: space-between;
}
</style>
