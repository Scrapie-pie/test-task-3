<template>
  <a href="#" class="slider-categories-item">
    <img :src="image" class="slider-categories-item__image">
    <div class="slider-categories-item__content">
      <div class="slider-categories-item__name">{{name}}</div>
      <div class="slider-categories-item__amount">{{amount}}</div>
    </div>
  </a>
</template>

<script>
export default {
  name: 'SliderCategoriesItem',
  props: {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      required: true,
    }
  },
}
</script>

<style lang="scss">
.slider-categories-item {
  display: flex !important;
  align-items: center;
  gap: 10px;
  &__image {
    @include create-figure(60px, $color: #C4C4C4, $radius: 3px);
  }
  &__content {
    display: flex !important;
    flex-direction: column;
    gap: 10px;
  }
  &__name {
    font-size: 14px;
  }
  &__amount {
    font-size: 12px;
  }
}

</style>
