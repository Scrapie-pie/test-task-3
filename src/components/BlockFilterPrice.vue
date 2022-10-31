<template>
  <div class="block-filter-price">
    <TemplateFilter name="Цена, валюта">
      <form>
        <div class="block-filter-price__inputs">
          <span class="block-filter-price__caption">от</span>
          <BaseInput v-model="value[0]" mod="primary"/>
          <span class="block-filter-price__caption">до</span>
          <BaseInput v-model="value[1]" mod="primary"/>
          <span class="block-filter-price__caption">Р</span>
        </div>
        <BaseRange v-model="value"></BaseRange>
      </form>
    </TemplateFilter>
  </div>
</template>

<script>
import BaseRange from './BaseRange.vue';
import BaseInput from './BaseInput.vue';
import TemplateFilter from './TemplateFilter.vue';
export default {
  name: 'BlockFilterPrice',
  data() {
    return {
      value: ['1000', '1000000'],
    }
  },
  components: {
    BaseRange,
    BaseInput,
    TemplateFilter
  }
}
</script>

<style lang="scss">
.block-filter-price {
  &__inputs {
    @include flex-it(row, 10px);
    align-items: center;
    margin: 16px 0 14px;

  }
  &__caption {
    font-size: 12px;
    opacity: .5;
  }

  // @include media($min: md, $max: xl) {
  //   &__inputs {
  //     flex-direction: column;
  //   }
  // }
}
</style>
