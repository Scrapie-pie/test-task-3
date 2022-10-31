<template>
  <div class="template-filter">
    <div class="template-filter__wrapper">
      <span class="template-filter__name">{{name}}</span>
      <span v-if="hasReset" @click="$emit('reset')" class="template-filter__reset">Очистить</span>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TemplateFilter',
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

<style lang="scss">
.template-filter {
  &__wrapper {
    @include flex-it(row, 15px);
    justify-content: space-between;
    margin-bottom: 14px;
  }
  &__name {
    font-weight: 700;
  }
  &__reset {
    font-size: 10px;
    text-decoration-line: underline;
    color: #333333;
    opacity: 0.5;
    cursor: pointer;
  }
}
</style>
