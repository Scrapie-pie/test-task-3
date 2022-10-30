<template>
  <header class="v-header">
    <BaseContainer>
      <div class="logo">Шапка сайта</div>
    </BaseContainer>
  </header>
</template>

<script>
import BaseContainer from './BaseContainer.vue';
export default {
  name: 'VHeader',
  components: {
    BaseContainer
  }
}
</script>

<style lang="scss" scoped>
.v-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: get-var(color, black);
  padding: get-var(space, xs) 0;
  margin-bottom: get-var(space, micro-xxl);

  .logo {
    color: get-var(color, white);
    font-weight: 700;
    //@include to-responsive(font-size, 84px, 112px);
  }

}
</style>
