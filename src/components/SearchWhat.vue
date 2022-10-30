<template>
  <div class="search-what">
    <BaseContainer>
      <div class="wrapper">
        <h2 class="title">Результаты по запросу</h2>
        <div class="caption">Показаны результаты для “Запрос пользозвателя”. Вы искали “<span class="italic">Зопрос</span> пользователя”.</div>
      </div>
    </BaseContainer>
  </div>
</template>

<script>
import BaseIcon from './BaseIcon.vue';
import BaseField from './BaseField.vue';
import BaseButton from './BaseButton.vue';
import BaseContainer from './BaseContainer.vue';
export default {
  name: 'SearchWhat',
  data() {
    return {
      value: ''
    }
  },
  components: {
    BaseIcon,
    BaseField,
    BaseButton,
    BaseContainer
  }
}
</script>

<style lang="scss" scoped>
.search-what {

  .wrapper {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 30px;
  }


  .caption {
    color: #8B8B8B;
    font-size: 14px;
    font-family: 'Open Sans';
  }

}
</style>
