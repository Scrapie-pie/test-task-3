<template>
  <div class="block-products-sort">
    <div class="block-products-sort__criterion">
      <span>Сортировать по:</span>
      <ul class="block-products-sort__list">
        <li class="block-products-sort__item block-products-sort__item--active">популярности</li>
        <li class="block-products-sort__item">сначала дешевые</li>
        <li class="block-products-sort__item">сначала дорогие</li>
      </ul>
    </div>
    <div class="block-products-sort__count">
      <span>Показывать по:</span>
      <BaseSelect :options="options"></BaseSelect>
    </div>

  </div>
</template>

<script>
import BaseSelect from './BaseSelect.vue';
export default {
  name: 'BlockProductsSort',
  data() {
    return {
      value: '',
      options: [
        {value: 24, text: '24'},
        {value: 16, text: '16'},
        {value: 12, text: '12'},
        {value: 8, text: '8'},
      ],
    }
  },
  components: {
    BaseSelect
  }
}
</script>

<style lang="scss">
.block-products-sort {
  $self: &;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px 30px;
  margin-bottom: 20px;
  &__criterion {
    @include flex-it(row, 10px);
    align-items: center;
  }
  &__count {
    @include flex-it(row, 10px);
    align-items: center;
  }
  &__list {
    @include flex-it(row, 10px 18px);
    align-items: center;
  }
  &__item {
    text-decoration: underline;
    text-decoration-color: transparent;
    &:not(&--active) {
      color: get-var(color, link);
    }
    &--active {
      text-decoration-color: get-var(color, primary);
    }
  }

  @include media($max: xl) {
    flex-direction: column;
  }
  @include media($max: sm) {
    &__criterion,
    &__list {
      flex-direction: column;
    }

  }
}
</style>
