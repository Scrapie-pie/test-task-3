<template>
  <a :href="href" :class="`contact contact--${type} contact--${mod}`">
    {{value}}
  </a>
</template>

<script>
export default {
  name: 'BaseContact',
  props: {
    value: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      validator: (value) => ['mail', 'tel'].includes(value),
      required: true,
    },
    mod: {
      type: String,
      validator: (value) => ['md', 'lg'].includes(value),
      default: 'md'
    }
  },
  computed: {
    href() {
      return this.type === 'mail' ?
        `mailto:${this.value}` :
        `tel:${this.formatedTel}`;
    },
    formatedTel() {
      return this.value.replace(/[\(|\)|-|\s]/g, '');
    },
  },
}
</script>

<style lang="scss">
.contact {
  color: get-var(color, blue_light);

  &--lg {
    font-weight: 600;
    font-size: 20px;
  }
}
</style>
