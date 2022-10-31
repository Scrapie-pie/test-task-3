<template>
  <div class="block-filter-brand">
    <TemplateFilter name="Бренды" :hasReset="true" @reset="onReset">
      <form class="block-filter-brand__form">
        <BaseCheckbox value="foo" v-model="checkedBrands">
          <span>Бренд<ElementAmount value="xxx" /></span>
        </BaseCheckbox>
        <BaseCheckbox value="bar" v-model="checkedBrands">
          <span>Бренд<ElementAmount value="x" /></span>
        </BaseCheckbox>
        <BaseCheckbox value="baz" v-model="checkedBrands">
          <span>Бренд<ElementAmount value="x xxx" /></span>
        </BaseCheckbox>
      </form>
    </TemplateFilter>
  </div>
</template>

<script>
import ElementAmount from './ElementAmount.vue';
import BaseCheckbox from './BaseCheckbox.vue';
import TemplateFilter from './TemplateFilter.vue';
export default {
  name: 'BlockFilterBrand',
  data() {
    return {
      checkedBrands: []
    }
  },
  methods: {
    onReset() {
      this.checkedBrands = [];
    }
  },
  components: {
    ElementAmount,
    BaseCheckbox,
    TemplateFilter
  }
}
</script>

<style lang="scss">
.block-filter-brand {
  &__form {
    @include flex-it(column, 15px);
  }
}
</style>
