<template>
  <div class="block-aside-categories">
    <div class="block-aside-categories__title">
      Все категории
    </div>
    <ul class="block-aside-categories__list">
      <li class="block-aside-categories__item" v-for="item of 8">
        Категория в которой нашли что-то <ElementAmount />
      </li>
    </ul>
    <span class="block-aside-categories__more">
      Ещё 10 категорий...
    </span>
  </div>
</template>

<script>
//import BaseLink from './BaseLink.vue';
import ElementAmount from './ElementAmount.vue';
export default {
  name: 'BlockAsideCategories',
  components: {
    //BaseLink,
    ElementAmount
  }
}
</script>

<style lang="scss">
.block-aside-categories {
  @include flex-it(column, 15px);
  &__list {
    @include flex-it(column, 14px);
  }
  &__item {
    color: get-var(color, link);
  }
  &__more {
    color: get-var(color, link);
  }

  @include media($max: md) {
    &__list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(100px, auto))
    }
  }
}
</style>
