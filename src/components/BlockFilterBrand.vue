<template>
  <div class="block">
    <VTemplateFilter name="Бренды" :hasReset="true" @reset="onReset">
      <form class="form">
        <VCheckbox value="foo" v-model="checkedBrands">
          <span>Бренд<AmountInline value="xxx" /></span>
        </VCheckbox>
        <VCheckbox value="bar" v-model="checkedBrands">
          <span>Бренд<AmountInline value="x" /></span>
        </VCheckbox>
        <VCheckbox value="baz" v-model="checkedBrands">
          <span>Бренд<AmountInline value="x xxx" /></span>
        </VCheckbox>
      </form>
    </VTemplateFilter>
  </div>
</template>

<script>
import AmountInline from './AmountInline.vue';
import VCheckbox from './VCheckbox.vue';
import VTemplateFilter from './VTemplateFilter.vue';
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
    AmountInline,
    VCheckbox,
    VTemplateFilter
  }
}
</script>

<style lang="scss" scoped>
.block {
  .form {
    @include flex-it(column, 15px);
  }
}
</style>
