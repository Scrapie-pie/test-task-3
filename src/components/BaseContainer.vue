<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BaseContainer',
}
</script>

<style lang="scss">
.container {
  @include container;
}
</style>
