<script setup>
// alert component
import {computed} from 'vue';
import { IconClose } from '../Icon'
const emit = defineEmits(['click']);
const handleClick = () => {
  emit('click');
};
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: null,
  },
  look: {
    type: String,
    default: 'clean',
    validator: (value) => ['clean', 'inverted', 'dark']
  },
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['default', 'primary', 'secondary', 'info', 'success', 'warning', 'danger', 'light'].includes(value),
  },
  shadow: {
    type: Boolean,
    default: true
  },
  closable: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg', 'xl', '2xl', '3xl'].includes(value),
  },
  border: {
    type: Boolean,
    default: true
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
  switch (props.look) {
    case 'inverted':
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
    case 'dark':
      return {
        'default' : 'bg-gray-100',
        'primary': 'bg-blue-500',
        'secondary': 'bg-gray-500',
        'info': 'bg-teal-500',
        'success': 'bg-green-500',
        'warning': 'bg-yellow-500',
        'danger': 'bg-red-500',
        'light': 'bg-gray-500',
      };
    default:
      return {
        'default' : 'bg-white',
        'primary': 'bg-white',
        'secondary': 'bg-white',
        'info': 'bg-white',
        'success': 'bg-white',
        'warning': 'bg-white',
        'danger': 'bg-white',
        'light': 'bg-white',
      }
    }
});
const borderClasses = computed(() => {
  switch (props.look) {
    case 'inverted':
      return {
        'default' : 'border-white',
        'primary': 'border-blue-100',
        'secondary': 'border-gray-100',
        'info': 'border-teal-100',
        'success': 'border-green-100',
        'warning': 'border-yellow-100',
        'danger': 'border-red-100',
        'light': 'border-gray-100',
      };
    case 'dark':
      return {
        'default' : 'border-gray-100',
        'primary': 'border-blue-500',
        'secondary': 'border-gray-500',
        'info': 'border-teal-500',
        'success': 'border-green-500',
        'warning': 'border-yellow-500',
        'danger': 'border-red-500',
        'light': 'border-gray-500',
      };
    default:
      return {
        'default' : 'border-gray-200',
        'primary': 'border-blue-200',
        'secondary': 'border-gray-200',
        'info': 'border-teal-200',
        'success': 'border-green-200',
        'warning': 'border-yellow-200',
        'danger': 'border-red-200',
        'light': 'border-gray-200',
      };
  }
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
    'lg': 'py-2.5',
    'xl': 'py-2.5',
    '2xl': 'py-3',
    '3xl': 'py-3',
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
const shadowSizeClasses = computed(() => {
  return {
    'sm': 'shadow-sm',
    'md': 'shadow-md',
    'lg': 'shadow-lg',
    'xl': 'shadow-xl',
    '2xl': 'shadow-2xl',
    '3xl': 'shadow-3xl',
  };
});

const shadowColorClasses = computed(() => {
  return {
    'default' : 'shadow-gray-200/25',
    'primary': 'shadow-blue-200/25',
    'secondary': 'shadow-gray-200/25',
    'info': 'shadow-teal-200/25',
    'success': 'shadow-green-200/25',
    'warning': 'shadow-yellow-200/25',
    'danger': 'shadow-red-200/25',
    'light': 'shadow-gray-200/25',
  };
});

const classes = computed(() => {
  return [
    'flex justify-between',
    props.border ? ['border', 'border-solid', borderClasses.value[props.variant]] : null,
    props.rounded ? roundedClasses.value[props.size] : null,
    props.shadow ? [ shadowSizeClasses.value[props.size], shadowColorClasses.value[props.variant]] : null,
    pxClasses.value[props.size],
    pyClasses.value[props.size],
    textSizeClasses.value[props.size],
    bgColorClasses.value[props.variant],
    colorClasses.value[props.variant],
  ];
});
const iconSizeMap = {
  'sm': 'sm',
  'md': 'sm',
  'lg': 'md',
  'xl': 'lg',
  '2xl': 'lg',
  '3xl': 'lg',
};
const show = computed(() => {
  return props.modelValue === null || props.modelValue === true;
});
</script>

<template>
  <div :class="classes" @click="handleClick" v-show="show">
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
    <template v-if="$slots.close || props.closable">
      <div class="ml-auto">
        <slot name="close">
          <IconClose :size="iconSizeMap[props.size]" />
        </slot>
      </div>
    </template>
  </div>
</template>