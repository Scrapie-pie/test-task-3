<template>
  <div class="v-products-filters-price">
    <span class="caption">Цена, валюта</span>
    <form>
      <div class="price-view">
        <span class="price-text">от</span>
        <BaseInput v-model="value[0]" mod="primary"/>
        <span class="price-text">до</span>
        <BaseInput v-model="value[1]" mod="primary"/>
        <span class="price-text">Р</span>
      </div>
      <VRange v-model="value"></VRange>
    </form>

  </div>
</template>

<script>
import BaseIcon from './BaseIcon.vue';
import BaseField from './BaseField.vue';
import BaseButton from './BaseButton.vue';
import BaseContainer from './BaseContainer.vue';
import VRange from './VRange.vue';
import BaseInput from './BaseInput.vue';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
  const currencyMask = createNumberMask({
    prefix: '',
    allowDecimal: true,
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: ' ',
    allowNegative: false,
  });

export default {
  name: 'VProductsFiltersPrice',
  data() {
    return {
      value: ['1000', '1000000'],
      valueMin: '1000',
      valueMax: '1000000',
      currencyMask,
    }
  },
  methods: {
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    handlerMin(val) {
      console.log(val)
      let newVal = parseInt(val).toString();
      console.log(newVal)
      this.value = [newVal, this.value[1]]

    }
  },
  computed: {

    q() {
      let a = parseInt(this.valueMin).toString()
      let b = parseInt(this.valueMax).toString()
      return [a, b]
    }
  },
  watch: {
    value(val) {
      console.log(val)
    }

  },
  components: {
    BaseIcon,
    BaseField,
    BaseButton,
    BaseContainer,
    VRange,
    BaseInput
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/common';

.v-products-filters-price {

  .caption {
    font-weight: 700;
  }

  .input-box {
    width: 110px;
    height: 40px;
    left: 62px;
    top: 728px;
    border: 1px solid #DEDEDE;
    border-radius: 3px;
    padding: 12px 13px;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    &[type=number] {
      -moz-appearance: textfield;
    }
  }

  .price-view {
    @include flex-it(row, 10px);
    align-items: center;
    margin: 16px 0 14px;

  }
  .price-text {
    font-size: 12px;
    opacity: .5;
  }

}
</style>
