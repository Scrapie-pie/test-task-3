<template>
  <a href="#" class="slider-categories-item">
    <img :src="image" class="image">
    <div class="content">
      <div class="name">{{name}}</div>
      <div class="amount">{{amount}}</div>
    </div>
  </a>
</template>

<script>
import VSlick from 'vue-slick';
import BaseIcon from './BaseIcon.vue';
import BaseField from './BaseField.vue';
import BaseButton from './BaseButton.vue';
import BaseContainer from './BaseContainer.vue';
//import BaseContainer from './BaseContainer.vue';
export default {
  name: 'SliderCategoriesItem',
  props: {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      required: true,
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
.slider-categories-item {
  display: flex !important;
  align-items: center;
  gap: 10px;


  .image {
    @include create-figure(60px, $color: #C4C4C4, $radius: 3px);
  }
  .content {
    display: flex !important;
    flex-direction: column;
    // align-items: center;
    gap: 10px;
  }
  .name {
    font-size: 14px;
  }
  .amount {
    font-size: 12px;
  }
}

</style>
