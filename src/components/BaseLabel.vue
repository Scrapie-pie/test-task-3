<template>
  <label class="label">
    <span v-if="name" class="label-name">
      {{ name }}
    </span>
    <div class="label-content">
        <slot></slot>
    </div>
  </label>
</template>

<script>
export default {
  name: "BaseLabel",
  props: {
    name: String
  },
  inheritAttrs: false
}
</script>

<style lang="scss">
.label {
  @include flex-it(column, 5px);
  display: inline-flex; // add to flex-it
  //align-items: center;

  &-name {
    @include h(5, $weight: 500);
  }

  &-content {
    @include flex-it(row, 10px);
    align-items: center;
    * {
      display: flex;
    }
  }

  // @media (min-width: get-var(breakpoint, xl) + 1px) {
  //   align-items: flex-end;
  // }
}
</style>
