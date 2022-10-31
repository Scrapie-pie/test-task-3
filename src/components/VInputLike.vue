<template>
  <div class="v-input-like" contenteditable="true" ref="element" @keypress="onKeypress">
    {{startValue}}
  </div>
</template>

<script>

export default {
  name: "v-input-like",
  data() {
    return {
      startValue: '',
    }
  },
  props: {
    value: String,
  },
  methods: {
    onInput(e) {
      this.$emit('input', this.$el.innerHTML);
    },
    onKeypress(e) {
      if (e.which === 13) {
        e.preventDefault();
      }
    },
    focus() {
      let range = document.createRange();
      let sel = window.getSelection();
      let childrenNodes = this.$el.childNodes;
      range.setStart(childrenNodes[0], childrenNodes[0].length);
      range.collapse(true);
      sel.removeAllRanges();
      sel.addRange(range);
    },
    reset() {
      this.$el.innerHTML = '<span></span>';
      this.focus();
    },
  },
  mounted() {
    this.startValue = this.value;
    this.$el.addEventListener('input', this.onInput);
  },
  beforeDestroy() {
    this.$el.removeEventListener('input', this.onInput);
  }
}
</script>

<style lang="scss">
.v-input-like {
  white-space: nowrap;
  max-width: 840px;
  overflow: hidden;
}
</style>
