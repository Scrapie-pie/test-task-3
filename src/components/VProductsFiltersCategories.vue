<template>
  <div class="v-products-filters-categories">
    <div class="title">Все категории</div>
    <ul class="list">
      <li class="item">Категория в которой нашли что-то <AmountInline /></li>
      <li class="item">Категория в которой нашли что-то <AmountInline /></li>
      <li class="item">Категория в которой нашли что-то <AmountInline /></li>
      <li class="item">Категория в которой нашли что-то <AmountInline /></li>
      <li class="item">Категория в которой нашли что-то <AmountInline /></li>
      <li class="item">Категория в которой нашли что-то <AmountInline /></li>
      <li class="item">Категория в которой нашли что-то <AmountInline /></li>
      <li class="item">Категория в которой нашли что-то <AmountInline /></li>
    </ul>
    <div class="more">Ещё 10 категорий...</div>
  </div>
</template>

<script>
import BaseIcon from './BaseIcon.vue';
import BaseField from './BaseField.vue';
import BaseButton from './BaseButton.vue';
import BaseContainer from './BaseContainer.vue';
import BaseLink from './BaseLink.vue';
import AmountInline from './AmountInline.vue';
export default {
  name: 'ProductsFilters',
  data() {
    return {
      value: ''
    }
  },
  components: {
    BaseIcon,
    BaseField,
    BaseButton,
    BaseContainer,
    BaseLink,
    AmountInline
  }
}
</script>

<style lang="scss" scoped>
.v-products-filters-categories {
  @include flex-it(column, 15px);
  .list {
    @include flex-it(column, 15px);
  }
  .item {
    color: get-var(color, link);
  }
  .more {
    color: get-var(color, link);
  }
}
</style>
