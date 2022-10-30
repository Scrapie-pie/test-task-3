<template>
  <div class="v-products-pagination">
    <div class="list">
      <div class="item">2</div>
      <div class="item active">3</div>
      <div class="dots">...</div>
      <div class="item">13</div>
    </div>

    <BaseIcon icon="arrow-pagination" />
  </div>
</template>

<script>
import BaseIcon from './BaseIcon.vue';
export default {
  name: 'VProductsPagination',
  data() {
    return {
      checkedBrands: []
    }
  },

  components: {
    BaseIcon,
  }
}
</script>

<style lang="scss" scoped>
.v-products-pagination {
  margin-top: 40px;
  margin-bottom: 50px;
  @include flex-it(row, 20px);
  .list {
    display: flex;
    gap: 30px;
    font-size: 16px;
  }

  .item {
    &:not(.active) {
      //color: #000000;
      opacity: 0.5;
    }
  }
  .dots {
    margin: 0 -22px;
  }
}
</style>
