<template>
  <div class="block-filter-price">
    <TemplateFilter name="Цена, валюта">
      <form>
        <div class="block-filter-price__inputs">
          <span class="block-filter-price__caption">от</span>
          <BaseInput
            :value="value[0]"
            mod="primary"
            @input="(val) => onMask(val, 0)"
            @keypress="numbersOnly"
          />
          <span class="block-filter-price__caption">до</span>
          <BaseInput
            v-model="value[1]"
            mod="primary"
            @input="(val) => onMask(val, 1)"
            @keypress="numbersOnly"
          />
          <span class="block-filter-price__caption">Р</span>
        </div>
        <BaseRange v-model="valueRange"></BaseRange>
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
      value: [],
      valueRange: ["1000", "1000000"],
    };
  },
  mounted() {
    this.value.push(this.setMask(this.valueRange[0]));
    this.value.push(this.setMask(this.valueRange[1]));
  },
  methods: {
    clearMask(value) {
      return parseInt(value.replaceAll(" ", ""));
    },
    onMask(value, index) {
      this.$set(this.value, index, this.setMask(this.clearMask(value)));
      this.$set(this.valueRange, index, this.clearMask(value));
    },
    setMask(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    numbersOnly(evt) {
      evt = evt || window.event;
      const charCode = evt.which ? evt.which : evt.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
  },
  watch: {
    valueRange(value) {
      this.$set(this.value, 0, this.setMask(value[0]));
      this.$set(this.value, 1, this.setMask(value[1]));
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
    @include flex-it(row, 10px);
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
