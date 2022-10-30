<template>


  <input
    v-if="!isContentEditable"
    class="input"
    :class="classMod"
    :type="type"
    :placeholder="placeholder"
    @input="onInput"
    v-bind="$attrs"
    ref="input"
  >

  <!-- <div
    v-if="isContentEditable"
    class="input"
    contenteditable="true"
    @input="onInputz"
    v-bind="$attrs"
    ref="editableBlock"
  >{{customValue}}</div> -->

    <!-- <div




  </div> -->

</template>

<script>
//import BaseLabel from './BaseLabel.vue';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
const currencyMask = createNumberMask({
  prefix: '',
  allowDecimal: true,
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: ' ',
  allowNegative: false,
});
export default {
  name: "BaseInput",
  data() {
    return {
      customValue: 'qwery',
      isMounted: false,
      currencyMask,
    }
  },
  inheritAttrs: false,
  props: {
    //value: [String, Number],
    label: String,
    type: {
      type: String,
      //validator: (value) => ['text', 'mail', 'password', 'number'].includes(value),
      default: "text",
    },
    placeholder: String,
    isContentEditable: {
      type: Boolean,
      default: false,
    },
    resizable: {
      type: Boolean,
      default: false,
    },
    mod: {
      type: String,
      validator: (value) => ['primary'].includes(value),
    },
    hasMask: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    classMod() {
      if (this.mod) {
        return `input--${this.mod}`
      }
    },
    // newVal() {
    //   if (this.hasMask) {
    //     return VMask(this.currencyMask)
    //   }
    // }
  },
  methods: {
    onInput(e) {
      // if (this.valToInt) {
      //   this.$emit('input', parseInt(e.target.value))
      // } else {
      //   this.$emit('input', e.target.value)
      // }
      //console.log(parseInt(e.target.value))
      this.$emit('input', e.target.value)
    }
  },
  // updated() {
  //   //do something after updating vue instance
  //   if (this.isMounted) {
  //     console.log(this.customValue);
  //     console.log(this.$refs.editableBlock.innerHTML);
  //   }
  // },
  mounted() {
    let vm = this
    //do something after mounting vue instance
    //this.isMounted = true;
    //console.log(this.$refs)
    //this.$refs.editableBlock.addEventListener("input", function(e) {
    //this.customValue = e.target.innerText
    //console.log(e.target.innerText)
    //console.log(this.customValue)
    // console.log("input event fired");
    // console.log(vm.value)
    // vm.$emit('input', vm.customValue);
 //}, false);

},
// methods: {
//   onInputz(e) {
//     //console.log(e)
//     console.log(e.target.innerText)
//     this.customValue = e.target.innerText;
//     this.$emit('input', this.customValue);
//     console.log(this.customValue)
//   }
// }
  // methods: {
  //   onInput(e) {
  //     console.log(e)
  //     this.$emit('input', e.target.value);
  //     if (this.resizable) {
  //       this.resizeIt(e.target,1);
  //     }
  //   },
  //   resizeIt (el, factor) {
  //     var int = Number(factor) || 7.7;
  //     function resize() {el.style.width = ((el.value.length+1) * int) + 'px'}
  //     var e = 'keyup,keypress,focus,blur,change'.split(',');
  //     for (var i in e) el.addEventListener(e[i],resize,false);
  //     resize();
  //   }
  // },
  // mounted() {
  // }

}
</script>

<style lang="scss">
@import "../assets/scss/common";
.input {
  $self: &;
  // @at-root #{&}.#{&}-primary{
  //       /*rules*/
  //   }
  &#{$self}--primary {
    @extend .common-input;
    padding: 12px 13px;
  }
}
</style>
