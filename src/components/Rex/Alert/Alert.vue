<script setup>
// alert component
import {computed} from 'vue';
const emit = defineEmits(['click']);
const handleClick = () => {
  emit('click');
};
const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['default', 'primary', 'secondary', 'info', 'success', 'warning', 'danger', 'light'].includes(value),
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg', 'xl', '2xl', '3xl'].includes(value),
  },
  border: {
    type: Boolean,
    default: false
  },
  rounded: {
    type: Boolean,
    default: true
  },
  iconPosition: {
    type: String,
    default: 'left',
    validator: (value) => ['left', 'right'].includes(value),
  }
});

const bgColorClasses = computed(() => {
  return {
    'default' : 'bg-white',
    'primary': 'bg-blue-100',
    'secondary': 'bg-gray-100',
    'info': 'bg-teal-100',
    'success': 'bg-green-100',
    'warning': 'bg-yellow-100',
    'danger': 'bg-red-100',
    'light': 'bg-gray-100',
  };
});
const borderClasses = computed(() => {
  return {
    'default' : 'border-gray-500',
    'primary': 'border-blue-500',
    'secondary': 'border-gray-500',
    'info': 'border-teal-500',
    'success': 'border-green-500',
    'warning': 'border-yellow-500',
    'danger': 'border-red-500',
    'light': 'border-gray-500',
  };
});
const colorClasses = computed(() => {
  return {
    'default' : 'text-gray-700',
    'primary': 'text-blue-700',
    'secondary': 'text-gray-700',
    'info': 'text-teal-700',
    'success': 'text-green-700',
    'warning': 'text-yellow-700',
    'danger': 'text-red-700',
    'light': 'text-gray-700',
  };
});
const pxClasses = computed(() => {
  return {
    'sm': 'px-3',
    'md': 'px-3',
    'lg': 'px-3',
    'xl': 'px-4',
    '2xl': 'px-4',
    '3xl': 'px-5',
  };
});
const pyClasses = computed(() => {
  return {
    'sm': 'py-1.5',
    'md': 'py-2',
    'lg': 'py-3',
    'xl': 'py-4',
    '2xl': 'py-5',
    '3xl': 'py-6',
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
const roundedClasses = computed(() => {
  return {
    'sm': 'rounded',
    'md': 'rounded-md',
    'lg': 'rounded-lg',
    'xl': 'rounded-xl',
    '2xl': 'rounded-2xl',
    '3xl': 'rounded-3xl',
  };
});

const classes = computed(() => {
  return [
    'flex',
    props.border ? ['border', 'border-solid', borderClasses.value[props.variant]] : null,
    props.rounded ? roundedClasses.value[props.size] : null,
    pxClasses.value[props.size],
    pyClasses.value[props.size],
    textSizeClasses.value[props.size],
    bgColorClasses.value[props.variant],
    colorClasses.value[props.variant],
  ];
});
</script>

<template>
  <div :class="classes" @click="handleClick">
    <template v-if="$slots.icon && props.iconPosition === 'left'">
      <div class="mr-2">
        <slot name="icon"></slot>
      </div>
    </template>
    <slot></slot>
    <template v-if="$slots.icon && props.iconPosition === 'right'">
      <div class="ml-2">
        <slot name="icon"></slot>
      </div>
    </template>
  </div>
</template>