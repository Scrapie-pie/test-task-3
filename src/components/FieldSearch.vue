<template>
  <form class="field-search" @submit.prevent="submit">
    <BaseContainer>
      <div class="wrapper">

        <!-- <div class='test' contenteditable="true" ref="inputLike" :value="value"></div> -->

        <!-- <BaseInputz :value="value"></BaseInputz> -->

        <BaseField :value="value" @input="handler" type="text" icon="search-query" isEditableBlock ref="search">
          <template #inlineAfter>
            <BaseIcon v-show="value.length" @click.native="reset" icon="cross" class="cross" ref="cross"></BaseIcon>
          </template>
          <template #right>
            <BaseButton mod="primary" class="find">Найти</BaseButton>
          </template>
        </BaseField>
        <BaseButton mod="secondary" class="close">Закрыть</BaseButton>
      </div>

      <!-- <BaseInputz @input="val=>value=val"></BaseInputz> -->
    </BaseContainer>
  </form>
</template>

<script>
import BaseIcon from './BaseIcon.vue';
import BaseField from './BaseField.vue';
import BaseButton from './BaseButton.vue';
import BaseContainer from './BaseContainer.vue';
//import BaseInputz from './BaseInputz.vue';
export default {
  name: 'SearchQuery',
  data() {
    return {
      value: 'Запрос пользователя',
      inputEl: null,
      crossEl: null,
      isMounted: false,
    }
  },
  methods: {
    submit() {
      console.log(this.value)

      //this.value = this.$refs.inputLike.innerHTML
    },
    handler(e) {
      this.value = e
    },
    reset(e) {
      //this.$refs.search.$refs.inputz.reset()
      this.$refs.search.$refs.inputz.reset()
      console.log('this.$refs.search.$refs.inputz.$refs')
      this.value = ''
    }
  },

  updated() {
    // if (this.isMounted) {
    //
    //   let inputsStyles = getComputedStyle(this.inputEl);
    //   let crossStyles = getComputedStyle(this.crossEl);
    //
    //   let inputFontSize = inputsStyles['font-size'];
    //   let len = this.value.length;
    //
    //   console.log(parseInt(inputFontSize) * len)
    //   //this.crossEl.style.left = parseInt(inputFontSize) * len
    //
    // }
    // console.log(this.value)
  },

  mounted() {
    // let input = this.$refs.search.$refs.input.$el;
    // let cross = this.$refs.cross.$el;
    //
    //
    // this.inputEl = input;
    // this.crossEl = cross;
    // this.isMounted = true;




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

<style lang="scss" scoped>
.field-search {



  margin-bottom: 30px;

  .wrapper {
    @include flex-it(row, 10px);
  }

  .find {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    max-width: 145px;
    width: 100%;
  }

  .close {
    max-width: 117px;
    width: 100%;
  }

  .test {

  }

  .cross {
    //position: absolute;
    cursor: pointer;
    z-index: 1;
    margin-left: 10px;
  }
}
</style>
