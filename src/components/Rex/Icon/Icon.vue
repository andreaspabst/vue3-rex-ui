<template>
  <component :is="iconComponent" v-if="iconComponent" />
</template>

<script setup>
import {IconClose} from "@/components/Rex/Icon/index.js";
import {computed, defineProps} from 'vue';
const props = defineProps({
  icon: {
    type: String,
    required: true,
  }
});
const iconComponent = computed(() => {
  switch (props.icon) {
    case 'close':
      return IconClose;
    default:
      return null;
  }
});
</script>