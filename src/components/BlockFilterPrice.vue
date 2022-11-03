<template>
  <div class="block-filter-price">
    <TemplateFilter name="Цена, валюта">
      <form>
        <div class="block-filter-price__inputs">
          <span class="block-filter-price__caption">от</span>
          <BaseInput
            mod="primary"
            :value="values[0]"
            @input="(val) => onMask(val, 0)"
            @keypress="numbersHandler"
          />
          <span class="block-filter-price__caption">до</span>
          <BaseInput
            mod="primary"
            v-model="values[1]"
            @input="(val) => onMask(val, 1)"
            @keypress="numbersHandler"
          />
          <span class="block-filter-price__caption">Р</span>
        </div>
        <BaseRange v-model="valuesRange"></BaseRange>
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
      values: [],
      valuesRange: ["1000", "1000000"],
    };
  },
  mounted() {
    this.values = this.valuesRange.map(this.setMask);
  },
  methods: {
    onMask(value, index) {
      this.$set(this.values, index, this.setMask(value));
      this.$set(this.valuesRange, index, this.clearMask(value));
    },
    setMask(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    clearMask(value) {
      return parseInt(value.replaceAll(" ", ""));
    },
    numbersHandler(event) {
      if (!/\d/.test(event.key)) {
        event.preventDefault()
      }
    },
  },
  watch: {
    valuesRange(values) {
      values.forEach((num, i) => {
        this.$set(this.values, i, this.setMask(values[i]));
      });
    },
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
    @include flex-it(row, get-var(space, micro-sm));
    align-items: center;
    margin: 16px 0 14px;

  }
  &__caption {
    font-size: 12px;
    opacity: .5;
  }

  @include media($max: xl) {
    &__inputs {
      flex-direction: column;
    }
  }

  @include media($max: md) {
    &__inputs {
      flex-direction: row;
    }
  }
}
</style>
