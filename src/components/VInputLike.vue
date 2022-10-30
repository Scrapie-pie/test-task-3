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
      this.$emit('input', e.target.value);
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
    let vm = this;
    this.startValue = this.value;
    this.$el.addEventListener('input', (e) => {
      vm.$emit('input', vm.$el.innerHTML);
    });
  },
}
</script>

<style lang="scss">
.v-input-like {
  //outline: none;
}
</style>
