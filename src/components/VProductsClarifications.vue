<template>
  <div class="v-products-clarifications">
    <div class="item">Уточнение</div>
    <div class="item">Уточнение</div>
    <div class="item">Уточнение</div>
    <div class="item">Уточнение</div>
  </div>
</template>

<script>

export default {
  name: 'VProductsClarifications',
  data() {
    return {
      value: ''
    }
  },
  components: {
  }
}
</script>

<style lang="scss" scoped>
.v-products-clarifications {
  @include flex-it(row, 10px);
  margin-bottom: 20px;
  .item {
    padding: 7px 15px;
    background-color: get-var(color, primary_light);
    border-radius: 3px;
  }
}
</style>
