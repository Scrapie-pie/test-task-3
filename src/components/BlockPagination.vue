<template>
  <div class="block-pagination">
    <div class="block-pagination__list">
      <a href="#" class="block-pagination__item">2</a>
      <a href="#" class="block-pagination__item block-pagination__item--active">3</a>
      <div class="block-pagination__dots">...</div>
      <a href="#" class="block-pagination__item">13</a>
    </div>
    <a href="#">
      <BaseIcon icon="arrow-pagination" />
    </a>

  </div>
</template>

<script>
import BaseIcon from './BaseIcon.vue';
export default {
  name: 'BlockPagination',
  components: {
    BaseIcon,
  }
}
</script>

<style lang="scss">
.block-pagination {
  margin-top: 40px;
  margin-bottom: 50px;
  @include flex-it(row, 20px);
  &__list {
    display: flex;
    gap: 30px;
    font-size: 16px;
  }

  &__item {
    transition: .25s ease-out;
    &:not(&--active) {
      opacity: 0.5;
    }
    &:hover {
      opacity: 1;
    }
  }
  &__dots {
    margin: 0 -22px;
  }
}
</style>
