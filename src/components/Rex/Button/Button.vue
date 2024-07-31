<script setup>
import {computed} from 'vue';
const emit = defineEmits(['click']);
const handleClick = () => {
  emit('click');
};
const props = defineProps({
  href: {
    type: String,
    default: null,
  },
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'info', 'success', 'warning', 'danger', 'light'].includes(value),
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg', 'xl', '2xl', '3xl'].includes(value),
  },
  block: {
    type: Boolean,
    default: false
  },
  outline: {
    type: Boolean,
    default: false
  },
  rounded: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
});
const tag = computed(() => {
  return props.href ? 'a' : 'button';
});
const bgColorClasses = computed(() => {
  return {
    'primary': 'bg-blue-600 hover:bg-blue-500 focus-visible:outline-blue-600',
    'secondary': 'bg-gray-600 hover:bg-gray-500 focus-visible:outline-gray-600',
    'info': 'bg-teal-600 hover:bg-teal-500 focus-visible:outline-teal-600',
    'success': 'bg-green-600 hover:bg-green-500 focus-visible:outline-green-600',
    'warning': 'bg-yellow-600 hover:bg-yellow-500 focus-visible:outline-yellow-600',
    'danger': 'bg-red-600 hover:bg-red-500 focus-visible:outline-red-600',
    'light': 'bg-gray-200 hover:bg-gray-300 focus-visible:outline-gray-200'
  };
});
const colorClasses = computed(() => {
  return {
    'primary': 'text-white',
    'secondary': 'text-white',
    'info': 'text-white',
    'success': 'text-white',
    'warning': 'text-white',
    'danger': 'text-white',
    'light': 'text-gray-800'
  };
});
const pxClasss = computed(() => {
  return {
    'sm': 'px-2',
    'md': 'px-2.5',
    'lg': 'px-3',
    'xl': 'px-3.5',
    '2xl': 'px-4',
    '3xl': 'px-5'
  };
});
const pyClasses = computed(() => {
  return {
    'sm': 'py-1',
    'md': 'py-1.5',
    'lg': 'py-2',
    'xl': 'py-2.5',
    '2xl': 'py-3',
    '3xl': 'py-4'
  };
});
const textSizeClasses = computed(() => {
  return {
    'sm': 'text-xs',
    'md': 'text-sm',
    'lg': 'text-base',
    'xl': 'text-lg',
    '2xl': 'text-xl',
    '3xl': 'text-2xl'
  };
});
const classes = computed(() => {
  return [
    pxClasss.value[props.size],
    pyClasses.value[props.size],
    textSizeClasses.value[props.size],
    bgColorClasses.value[props.variant],
    colorClasses.value[props.variant],
    'rounded-md',
    'font-semibold',
    'shadow-sm',
    'focus-visible:outline',
    {
      'block': props.block,
      'rounded-md': props.rounded,
      'border': props.outline,
      'border-gray-300': props.outline,
      'text-gray-700': props.outline,
      'bg-white': props.outline,
      'cursor-not-allowed': props.disabled
    }
  ];
});
</script>

<template>
  <component :is="tag" :class="classes" @click="handleClick">
    <slot></slot>
  </component>
</template>
