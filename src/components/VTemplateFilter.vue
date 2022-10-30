<template>
  <div class="template">
    <div class="wrapper">
      <span class="name">{{name}}</span>
      <span v-if="hasReset" @click="$emit('reset')" class="reset">Очистить</span>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VProductsFiltersBrand',
  props: {
    name: {
      type: String,
      required: true,
    },
    hasReset: {
      type: Boolean,
      default: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.template {
  .wrapper {
    @include flex-it(row, 15px);
    justify-content: space-between;
    margin-bottom: 14px;
  }

  .name {
    font-weight: 700;
  }

  .reset {
    font-size: 10px;
    text-decoration-line: underline;
    color: #333333;
    opacity: 0.5;
    cursor: pointer;
  }

  // .form {
  //   @include flex-it(column, 15px);
  // }
}
</style>
