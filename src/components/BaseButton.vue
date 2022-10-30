<template>
  <button class="button" :class="classMod">
    <BaseIcon v-if="hasIconLeft" :icon="computedIcon"/>
      <span class="button-text">
        <slot>

        </slot>
      </span>
    <BaseIcon v-if="hasIconRight" :icon="computedIcon"/>
  </button>
</template>

<script>
import BaseIcon from './BaseIcon.vue';

export default {
  name: 'BaseButton',
  props: {
    mod: {
      type: String,
      validator: (value) => ['primary', 'secondary'].includes(value),
      default: 'primary'
    },
    iconLeft: String,
    iconRight: String,
    sent: {
      type: Boolean,
      default: false
    },
    // tag: {
    //   type: String,
    //   required: false,
    // }
  },
  computed: {
    classMod() {
      return `button--${this.mod}`;
    },
    computedIcon() {
      if (this.iconLeft) return this.iconLeft;
      if (this.iconRight) return this.iconRight;
    },
    hasIconLeft() {
      return this.iconLeft;
    },
    hasIconRight() {
      return this.iconRight;
    },

  },
  components: {
    BaseIcon
  }
}
</script>

<style lang="scss">
.button {
  $self: &;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  position: relative;
  font-size: 14px;
  padding: 12px 15px;
  border-radius: 3px;
  font-weight: 700;
  &-text {
    position: relative;
    z-index: 2;
  }
  &--primary {
    background-color: #F1BD45;
  }
  &--secondary{
    border: 1px solid #DEDEDE;
    background-color: white;
  }
}
</style>
