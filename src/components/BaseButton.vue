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
  @include flex-centralize;
  cursor: pointer;
  border: none;
  position: relative;
  font-size: 14px;
  padding: 12px 15px;
  border-radius: 3px;
  font-weight: 700;
  transition: .25s ease-out;
  &-text {
    position: relative;
    z-index: 2;
  }
  &--primary {
    $bg: get-var(color, primary);
    background-color: $bg;
    &:hover {
      background-color: darken($bg, 10%);
    }
  }
  &--secondary {
    $bg: get-var(color, white);
    border: 1px solid get-var(color, border);
    background-color: $bg;
    &:hover {
      background-color: darken($bg, 5%);
    }
  }
}
</style>
