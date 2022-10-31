<template>
  <div class="block-content-grid">
    <BaseContainer>
      <div class="block-content-grid__wrapper">
        <BlockAside />
        <BlockSearchedContent></BlockSearchedContent>
      </div>
    </BaseContainer>
  </div>
</template>

<script>
import BaseContainer from './BaseContainer.vue';
import BlockAside from './BlockAside.vue';
import BlockSearchedContent from './BlockSearchedContent.vue';
export default {
  name: 'BlockContentGrid',
  components: {
    BaseContainer,
    BlockAside,
    BlockSearchedContent
  }
}
</script>

<style lang="scss">
.block-content-grid {
  &__wrapper {
    display: grid;
    grid-template-columns: 3fr 9fr;
    gap: 40px;
  }
  @include media($max: md) {
    &__wrapper {
      grid-template-columns: 1fr;
    }
  }
}
</style>
