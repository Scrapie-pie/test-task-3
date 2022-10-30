<template>
  <div class="v-products-card">
    <img src="@/assets/img/Rectangle-big.jpg" alt="" class="image">
    <div class="name">Наименование товара, которое не более 2 строк</div>
    <div class="price">
      <div class="actual">ХХ ХХХ , $</div>
      <div class="old">ХХ ХХХ $</div>
    </div>
    <BaseButton>Кнопка</BaseButton>
  </div>
</template>

<script>
import BaseButton from './BaseButton.vue';
export default {
  name: 'VProductsCard',
  data() {
    return {
      value: ''
    }
  },
  components: {
    BaseButton
  }
}
</script>

<style lang="scss" scoped>
.v-products-card {
  @include flex-it(column);
  .image {
    height: 260px;
  }
  .name {
    padding: 10px 0 18px;
    //height: 2em;
  }

  .price {
    @include flex-it(row, 16px);
    align-items: center;
    font-family: 'Open Sans';
  }
  .actual {
    font-size: 16px;
    font-weight: 700;
  }
  .old {
    color: get-var(color, price_old);
    text-decoration: line-through;
  }

  .button {
    margin-top: 15px;
  }
}
</style>
