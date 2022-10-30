<template>
  <div class="field" :class="[filledClass, `field-${type}`]">
    <span v-if="label" class="field-name">
      {{label}}
    </span>
    <div :class="`field-wrapper`">
      <div class="field-action">
        <BaseIcon v-if="icon" :icon="icon" class="field-icon" />
        <div class="field-fit" @click.self="actionClicked">

          <div class="field-input">

            <BaseTextarea
              v-if="type === 'textarea' && !isEditableBlock"
              v-bind="$attrs"
              v-on="listeners"
            />
            <BaseInput
              v-else-if="!isEditableBlock"
              v-bind="$attrs"
              v-on="listeners"
              :type="type"
              ref="input"
              :placeholder="!isCustomPlaceholder ? placeholder : ''"
            />

            <VInputLike v-if="isEditableBlock" v-bind="$attrs" ref="inputz" v-on="listeners"></VInputLike>

            <slot name="inlineAfter"></slot>
          </div>



          <span
            v-if="placeholder && !isCustomPlaceholder || placeholder && isPopupPlaceholder"
            v-show="isShowingPlaceholder"
            class="field-placeholder"
            :class="placeholderClass"
          >
            {{placeholder}}
          </span>
        </div>
      </div>
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
import BaseInput from './BaseInput.vue';
import BaseTextarea from './BaseTextarea.vue';
import BaseLabel from './BaseLabel.vue';
import BaseIcon from './BaseIcon.vue';
import BaseButton from './BaseButton.vue';
import VInputLike from './VInputLike.vue';

export default {
  name: 'BaseField',
  data() {
    return {
      isMounted: false,
      isShowingPlaceholder: true,
      filledClass: '',
    }
  },
  props: {
    type: {
      type: String,
      default: 'text',
    },
    isPopupPlaceholder: {
      type: Boolean,
      default: false
    },
    isCustomPlaceholder: {
      type: Boolean,
      default: false,
    },
    label: String,
    placeholder: String,
    icon: String,
    isEditableBlock: {
      type: Boolean,
      default: false,
    }
  },
  inheritAttrs: false,
  computed: {
    placeholderClass() {
      if (this.isPopupPlaceholder) {
        return `field-placeholder--popup`
      }
    },
    listeners() {
      let vm = this;

      return Object.assign({},
        this.$listeners,
        {
          input(value) {
            vm.$emit('input', value);
            vm.showingPlaceholder(value);
            vm.filledClassHandler(value);
          },
        }
      )
    },
  },
  mounted() {
    //do something after mounting vue instance

  },
  methods: {
    showingPlaceholder(inputValue) {
      this.isShowingPlaceholder = !this.isPopupPlaceholder && !inputValue.length;
    },
    filledClassHandler(inputValue) {
      this.filledClass = inputValue.length ? 'field_filled' : '';
    },
    actionClicked(e) {
      console.log('actionClicked')
      //console.log(this.$refs)
      this.$refs.inputz.focus()
    }
  },
  components: {
    BaseInput,
    BaseTextarea,
    BaseLabel,
    BaseIcon,
    BaseButton,
    VInputLike
  }
}
</script>

<style lang="scss">
//background: #CCCCCC;

.field {
  $self: &;

  width: 100%;
  @include flex-it(column, 10px);



  &-name {
    color: get-var(color, grey_dark);
    width: min-content;
  }

  &-wrapper {
    display: flex;
    align-items: center;
    //border: 1px solid #C7C7C7;
    //border-radius: 5px;

  }

  &-input {
    position: relative;
    @include flex-it(row);
    align-items: center;
  }

  #{$self}-action {
    position: relative;
    display: flex;
    align-items: center;
    //padding-bottom: 4px;
    width: 100%;
    height: 100%;
    padding: 0 15px;
    //@include h(3, $color: #343434, $weight: 300);

    font-size: 14px;
    //font-weight: 300;
    //border-bottom: 1px solid #E2E2E2;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    border: 1px solid #C7C7C7;
    border-right-color: transparent;


  }

  // &-icon {
  //   position: relative;
  //
  // }

  #{$self}-fit {
    width: 100%;
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    //justify-content: space-between;
    cursor: text;
    margin-left: 12px;



    &::before {
      content: '';
      width: 1px;
      height: 16px;
      background-color: #989898;
      margin-right: 11px;
      //margin-left: 12px;
      //margin-right: 11px;
    }
  }

  #{$self}-placeholder {
    position: absolute;
    width: 100%;
    left: 0;
    pointer-events: none;
    //@include h(3, $color: #CCCCCC, $weight: 300);
    font-size: 14px;
    //color: #CCCCCC;
    transition: .25s ease-out;
  }

  &-text, &-password, &-mail {
    #{$self}-placeholder {
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .input, .textarea {
    width: 100%;
    font-weight: 300;

    &[required] + #{$self}-placeholder {
      &:after {
        content: ' *';
        color: #FF1300;
      }
    }
  }

  &-textarea {
    padding-top: 60px;
    .textarea {
      height: 1em;
      overflow: hidden;
    }

    #{$self}-placeholder {
      bottom: 60px;
    }
  }

  .input:focus + #{$self}-placeholder--popup {
    font-size: 16px;
    top: -10px;
    transition: .1s ease-in;
  }

  &_filled {
    .input + #{$self}-placeholder--popup {
      font-size: 16px;
      top: -10px;
      transition: .1s ease-in;
    }
  }
}
</style>
