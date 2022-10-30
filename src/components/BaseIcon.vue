<template>
  <component :is="currentComponent" :class="`icon icon_${this.icon}`"/>
</template>

<script>
const icons = require('../assets/icons/generated/names.json');
import '../assets/icons/generated/style.css';
export default {
  name: 'BaseIcon',
  props: {
    icon: {
      type: String,
      required: true
    },
  },
  components: {
    ...Object.fromEntries(icons.map(icon => [
      toComponentName(icon),
      () => import(`../assets/icons/${icon}.svg`)
    ]))
  },
  computed: {
    currentComponent() {
      return toComponentName(this.icon);
    },
  },
};

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
};

function toComponentName(name) {
  return 'Icon' + name.split(/[-|_]/).map(chunk => capitalize(chunk)).join('');
}
</script>

<style lang="scss">
.icon {
  vertical-align: middle;
  //color: #000000;
  //font-size: 22px; // icon_name
  //max-width: 1em;
  //min-width: 1em;
  //width: 100%;

}

</style>
