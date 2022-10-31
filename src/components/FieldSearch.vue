<template>
  <form class="field-search" @submit.prevent="submit">
    <BaseContainer>
      <div class="field-search__wrapper">
        <BaseField :value="value" @input="onInput" type="text" icon="search-query" isEditableBlock ref="search">
          <template #inlineAfter>
            <BaseIcon v-show="value.length" @click.native="reset" icon="cross" class="field-search__cross" ref="cross"></BaseIcon>
          </template>
          <template #right>
            <BaseButton mod="primary" class="field-search__find">Найти</BaseButton>
          </template>
        </BaseField>
        <BaseButton mod="secondary" class="field-search__close">Закрыть</BaseButton>
      </div>
    </BaseContainer>
  </form>
</template>

<script>
import BaseIcon from './BaseIcon.vue';
import BaseField from './BaseField.vue';
import BaseButton from './BaseButton.vue';
import BaseContainer from './BaseContainer.vue';
export default {
  name: 'FieldSearch',
  data() {
    return {
      value: 'Запрос пользователя',
      inputEl: null,
      crossEl: null,
      isMounted: false,
    }
  },
  methods: {
    submit() {},
    onInput(e) {
      this.value = e
    },
    reset(e) {
      this.$refs.search.$refs.inputz.reset()
      this.value = ''
      //fix
    }
  },

  components: {
    BaseIcon,
    BaseField,
    BaseButton,
    BaseContainer,
    //BaseInputz
  }
}
</script>

<style lang="scss">
.field-search {
  margin-bottom: 30px;
  &__wrapper {
    @include flex-it(row, 10px);
  }
  &__find {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    max-width: 145px;
    width: 100%;
  }

  &__close {
    max-width: 117px;
    width: 100%;
  }
  &__cross {
    cursor: pointer;
    z-index: 1;
    margin-left: 10px;
  }
}
</style>
