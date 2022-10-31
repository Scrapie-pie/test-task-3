<template>
  <div class="slider-categories">
    <BaseContainer class="slider-categories__wrapper">
      <VSlick :options="slickOptions">
        <SliderCategoriesItem
          v-for="item of 10"
          image="https://i.pinimg.com/736x/f4/d2/96/f4d2961b652880be432fb9580891ed62.jpg"
          name="Название категории"
          amount="134 товара"
        />
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
        responsive: [
          {
            breakpoint: 1024,
            settings: { slidesToShow: 4 }
          },
          {
            breakpoint: 768,
            settings: { slidesToShow: 3 }
          },
          {
            breakpoint: 576,
            settings: { slidesToShow: 2 }
          },

        ]
      },
    };
  },
  components: {
    BaseContainer,
    VSlick,
    SliderCategoriesItem
  }
}
</script>

<style lang="scss">
.slider-categories {
  margin-bottom: 35px;
  margin-left: -20px;
  &__wrapper {
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
  .slick-slide {
    padding-left:20px;
    position: relative;
    &:before {
      content: '';
      position: absolute;
      height: 100%;
      width: 1px;
      background-color: #B9B9B9;
      left: -1px;
    }
  }

  @include media($max: md) {
    &__wrapper::after {
      background: linear-gradient(269.76deg, #FFFFFF 6%, transparent 31%);
      //display: none;
    }
  }
}


</style>
