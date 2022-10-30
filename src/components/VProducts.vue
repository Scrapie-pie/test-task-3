<template>
  <div class="v-products">
    <BaseContainer>
      <div class="wrapper">
        <VProductsFilters></VProductsFilters>
        <VProductsView></VProductsView>
      </div>
    </BaseContainer>
  </div>
</template>

<script>
import BaseIcon from './BaseIcon.vue';
import BaseField from './BaseField.vue';
import BaseButton from './BaseButton.vue';
import BaseContainer from './BaseContainer.vue';
import VProductsFilters from './VProductsFilters.vue';
import VProductsView from './VProductsView.vue';
export default {
  name: 'VProducts',
  data() {
    return {
      value: ''
    }
  },
  components: {
    BaseIcon,
    BaseField,
    BaseButton,
    BaseContainer,
    VProductsFilters,
    VProductsView
  }
}
</script>

<style lang="scss" scoped>
.v-products {

  .wrapper {
    display: grid;
    grid-template-columns: 3fr 9fr;
    gap: 40px;
  }

}
</style>
