<template>
  <label class="base-checkbox">
    <input type="checkbox" :checked="isChecked" :value="value" @change="updateInput"/>
    <span class="base-checkbox__checkmark"></span>
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: 'BaseCheckbox',
  model: {
    prop: 'modelValue',
    event: 'change'
  },
  props: {
    "value": { type: String },
    "modelValue": { default: "" },
    "trueValue": { default: true },
    "falseValue": { default: false }
  },
  computed: {
    isChecked() {
      if (this.modelValue instanceof Array) {
        return this.modelValue.includes(this.value)
      }
      return this.modelValue === this.trueValue
    }
  },
  methods: {
    updateInput(event) {
      let isChecked = event.target.checked
      if (this.modelValue instanceof Array) {
        let newValue = [...this.modelValue]
        if (isChecked) {
          newValue.push(this.value)
        } else {
          newValue.splice(newValue.indexOf(this.value), 1)
        }
        this.$emit('change', newValue)
      } else {
        this.$emit('change', isChecked ? this.trueValue : this.falseValue)
      }
    }
  }
}
</script>

<style lang="scss">
.base-checkbox {
  display: flex;
  position: relative;
  padding-left: 25px;
  cursor: pointer;
  user-select: none;
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  &__checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 15px;
    width: 15px;
    border-radius: 2px;
    background-color: white;
    border: 1px solid #ccc;
  }
  &:hover input ~ &__checkmark {
    border-color: black;
  }
  input:checked ~ &__checkmark {
    background-color: #0075FF;
    border-color: #0075FF;
  }
  &__checkmark:after {
    content: "";
    position: absolute;
    display: none;
    left: 4px;
    top: 1px;
    width: 5px;
    height: 9px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
  input:checked ~ &__checkmark:after {
    display: block;
  }
}
</style>
