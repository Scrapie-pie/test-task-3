<template>
  <div class="element-mark">
    {{text}}
  </div>
</template>

<script>

export default {
  name: 'ElementMark',
  props: {
    text: {
      type: String,
      default: 'Уточнение'
    },
  },
}
</script>

<style lang="scss">
.element-mark {
  padding: 7px 15px;
  background-color: get-var(color, primary_light);
  border-radius: 3px;
}
</style>
