<template>
  <VueSlider class="v-range" v-bind="settings" :value="value" @change="change" />
</template>

<script>
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'
export default {
  name: 'VRange',
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
  methods: {
    change(e) {
      this.$emit('input', e)
    },
  },
  components: {
    VueSlider,
  },
}
</script>

<style lang="scss">
.v-range {
  .vue-slider-rail {
    height: 4px;
    background-color: black;
  }
  .vue-slider-process {
    background-color: black;
  }
  .vue-slider-dot-handle {
    border: 2px solid black;
    box-shadow: none;
  }
}
</style>
