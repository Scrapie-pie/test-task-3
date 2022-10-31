<template>
  <section class="block-searched-prompt">
    <BaseContainer>
      <div class="block-searched-prompt__wrapper">
        <h2 class="block-searched-prompt__title">Результаты по запросу</h2>
        <div class="block-searched-prompt__caption">Показаны результаты для “Запрос пользозвателя”. Вы искали “<span class="italic">Зопрос</span> пользователя”.</div>
      </div>
    </BaseContainer>
  </section>
</template>

<script>
import BaseContainer from './BaseContainer.vue';
export default {
  name: 'BlockSearchedPrompt',
  components: {
    BaseContainer
  }
}
</script>

<style lang="scss">
.block-searched-prompt {
  &__wrapper {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 30px;
  }
  &__title {
    white-space: nowrap;
  }
  &__caption {
    color: get-var(color, caption);
    font-family: 'Open Sans';
  }
}
</style>
