<template>
  <span class="v-amount-inline">
    ({{value}})
  </span>
</template>

<script>
export default {
  name: "AmountInline",
  props: {
    value: {
      type: [String, Number],
      default: 'xxx'
    }
  },
}
</script>

<style lang="scss" scoped>
  .v-amount-inline {
    font-size: 12px;
    color: get-var(color, amount_inline);
  }
</style>
