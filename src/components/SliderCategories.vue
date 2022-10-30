<template>
  <div class="slider-categories">
    <BaseContainer class="wrapper">
      <VSlick :options="slickOptions">
        <SliderCategoriesItem v-for="item of 10" image="https://i.pinimg.com/736x/f4/d2/96/f4d2961b652880be432fb9580891ed62.jpg" name="asdas" amount="134 товара"/>
      </VSlick>
    </BaseContainer>
  </div>
</template>

<script>
import 'slick-carousel/slick/slick.css';
import VSlick from 'vue-slick';
import BaseContainer from './BaseContainer.vue';
import SliderCategoriesItem from './SliderCategoriesItem.vue';
export default {
  name: 'SliderCategories',
  data() {
    return {
      slickOptions: {
        slidesToShow: 5,
        prevArrow: null,
        nextArrow: null,
        autoplay: true,
        draggable: false,
      },
    };
  },
  props: {
    items: {
      type: Array,
      required: true,
    }
  },
  components: {
    BaseContainer,
    VSlick,
    SliderCategoriesItem
  }
}
</script>

<style lang="scss" scoped>
.slider-categories {
  margin-bottom: 40px;
  .wrapper {
    position: relative;
    &:after {
      content: '';
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      height: 100%;
      width: 100%;
      background: linear-gradient(269.76deg, #FFFFFF 10%, transparent 19.7%);
      pointer-events: none;
    }
  }

}


</style>
