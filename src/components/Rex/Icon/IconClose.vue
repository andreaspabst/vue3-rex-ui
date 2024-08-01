<template>
  <!-- close svg -->
  <svg xmlns="http://www.w3.org/2000/svg" :class="iconClasses" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
</template>

<script setup>
import {computed, defineProps} from 'vue';
const props = defineProps({
  size: { type: String, default: 'md' },
});
const sizeClasses = computed(() => {
  return {
    'sm': 'w-4 h-4',
    'md': 'w-6 h-6',
    'lg': 'w-8 h-8',
    'xl': 'w-12 h-12',
    '2xl': 'w-16 h-16',
    '3xl': 'w-20 h-20',
  };
});

const iconClasses = computed(() => {
  return `${sizeClasses.value[props.size]}`;
});
</script>