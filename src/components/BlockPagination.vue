<template>
  <div class="block-pagination">
    <div class="block-pagination__list">
      <div class="block-pagination__item">2</div>
      <div class="block-pagination__item block-pagination__item--active">3</div>
      <div class="block-pagination__dots">...</div>
      <div class="block-pagination__item">13</div>
    </div>
    <BaseIcon icon="arrow-pagination" />
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
    &:not(&--active) {
      opacity: 0.5;
    }
  }
  &__dots {
    margin: 0 -22px;
  }
}
</style>
