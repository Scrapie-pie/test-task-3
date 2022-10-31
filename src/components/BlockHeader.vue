<template>
  <header class="header">
    <BaseContainer>
      <div class="header__logo">Шапка сайта</div>
    </BaseContainer>
  </header>
</template>

<script>
import BaseContainer from './BaseContainer.vue';
export default {
  name: 'BlockHeader',
  components: {
    BaseContainer
  }
}
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: get-var(color, black);
  padding: get-var(space, xs) 0;
  margin-bottom: get-var(space, micro-xxl);

  &__logo {
    color: get-var(color, white);
    font-weight: 700;
  }

}
</style>
