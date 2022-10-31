<template>
  <a href="#" class="block-product-card">
    <img :src="image" alt="" class="block-product-card__image">
    <div class="block-product-card__name">{{name}}</div>
    <div class="block-product-card__price">
      <div class="block-product-card__actual">{{price}} , $</div>
      <div class="block-product-card__old">{{oldPrice}} $</div>
    </div>
    <BaseButton class="block-product-card__button">{{buttonText}}</BaseButton>
  </a>
</template>

<script>
import BaseButton from './BaseButton.vue';
export default {
  name: 'BlockProductCard',
  props: {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    oldPrice: {
      type: String,
      required: true,
    },
    buttonText: {
      type: String,
      required: true,
    },

  },
  components: {
    BaseButton
  }
}
</script>

<style lang="scss">
.block-product-card {
  @include flex-it(column);
  transition: .25s ease-out;
  &__image {
    @include to-responsive('height', 180px, 260px);
    max-height: 260px;
    border-radius: 3px;
  }
  &__name {
    padding: 10px 0 18px;
    height: 60px;
  }

  &__price {
    @include flex-it(row, 16px);
    align-items: center;
    font-family: 'Open Sans';
  }
  &__actual {
    font-size: 16px;
    font-weight: 700;
  }
  &__old {
    color: get-var(color, price_old);
    text-decoration: line-through;
  }

  &__button {
    margin-top: 15px;
  }

  &:hover > &__button {
    $bg: get-var(color, primary);
    background-color: darken($bg, 10%);
  }

}
</style>
