<template>
  <input
    class="input"
    :class="classMod"
    :type="type"
    :placeholder="placeholder"
    v-bind="$attrs"
    v-on="inputListeners"
    ref="input"
  >
</template>

<script>
export default {
  name: "BaseInput",
  inheritAttrs: false,
  props: {
    label: String,
    type: {
      type: String,
      //validator: (value) => ['text', 'mail', 'password', 'number'].includes(value),
      default: "text",
    },
    placeholder: String,
    mod: {
      type: String,
      validator: (value) => ['primary'].includes(value),
    },
  },
  computed: {
    inputListeners: function () {
      let vm = this
      return Object.assign({},
        this.$listeners,
        {
          input: function (event) {
            vm.$emit('input', event.target.value)
          }
        }
      )
    },
    classMod() {
      if (this.mod) {
        return `input--${this.mod}`
      }
    },
  },
}
</script>

<style lang="scss">
@import "../assets/scss/common";
.input {
  $self: &;
  &#{$self}--primary {
    @extend .common-input;
    padding: 12px 13px;
  }
}
</style>
