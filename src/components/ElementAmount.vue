<template>
  <span class="element-amount">
    ({{value}})
  </span>
</template>

<script>
export default {
  name: "ElementAmount",
  props: {
    value: {
      type: [String, Number],
      default: 'xxx'
    }
  },
}
</script>

<style lang="scss">
  .element-amount {
    font-size: 12px;
    color: get-var(color, amount_inline);
  }
</style>
