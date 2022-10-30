<template>
  <BaseLabel :name="label">
    <select
      class="select"
      @change="$emit('change', $event.target.value)"
    >
      <option v-for="option in options" v-bind:value="option.value">
        {{ option.text }}
      </option>
    </select>
  </BaseLabel>
</template>

<script>
import BaseLabel from './BaseLabel.vue';
export default {
  name: "BaseSelect",
  inheritAttrs: false,
  props: {
    label: String,
    options: {
      type: Array,
      required: true
    }
  },
  model: {
    prop: 'selected',
    event: 'change'
  },
  components: {
    BaseLabel
  }
}
</script>

<style lang="scss">
@import "../assets/scss/common";
.select {
  // $self: &;
  // &#{$self}--primary {
  //   @extend .common-input-padding-1;
  // }
  @extend .common-input;
  padding: 6px 10px;
}
</style>
