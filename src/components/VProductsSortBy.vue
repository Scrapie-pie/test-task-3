<template>
  <div class="v-products-sort-by">
    <div class="criterion">
      <span>Сортировать по:</span>
      <ul class="list">
        <li class="item active">популярности</li>
        <li class="item">сначала дешевые</li>
        <li class="item">сначала дорогие</li>
      </ul>
    </div>
    <div class="count">
      <span>Показывать по:</span>
      <BaseSelect :options="options"></BaseSelect>
    </div>

  </div>
</template>

<script>
import BaseSelect from './BaseSelect.vue';
export default {
  name: 'VProductsSortBy',
  data() {
    return {
      value: '',
      options: [
        {value: 24, text: '24'},
        {value: 24, text: '24'},
        {value: 24, text: '24'},
        {value: 24, text: '24'},
      ],
    }
  },
  components: {
    BaseSelect
  }
}
</script>

<style lang="scss" scoped>
.v-products-sort-by {

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  margin-bottom: 20px;

  .criterion {
    @include flex-it(row, 10px);
    align-items: center;

  }

  .count {
    @include flex-it(row, 10px);
    align-items: center;
  }

  .list {
    @include flex-it(row, 18px);
  }

  .item {
    text-decoration: underline;
    text-decoration-color: transparent;
    &:not(.active) {
      color: get-var(color, link);
    }
    &.active {
      text-decoration-color: get-var(color, primary);
    }
  }
}
</style>
