<template>
  <VueSlider
    class="base-range"
    v-bind="settings"
    :value="value"
    @change="value => $emit('input', value)"
  />
</template>

<script>
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'
export default {
  name: 'BaseRange',
  props: {
    value: {
      required: false,
      default: ['1000', '1000000'],
    },
    settings: {
      type: Object,
      default() {
        return {
          dotSize: 14,
          tooltip: 'none',
          min: 0,
          max: 1000000,
        }
      }
    }
  },
  components: {
    VueSlider,
  },
}
</script>

<style lang="scss">
.base-range {
  .vue-slider-rail {
    height: 4px;
    background-color: get-var(color, black);
  }
  .vue-slider-process {
    background-color: get-var(color, black);
  }
  .vue-slider-dot-handle {
    border: 2px solid get-var(color, black);
    box-shadow: none;
  }
}
</style>
