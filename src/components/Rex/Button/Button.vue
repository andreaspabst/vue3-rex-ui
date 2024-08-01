<script setup>
import {computed} from 'vue';
import {fillUpAllVariants} from "@/components/classesHelper.js";
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
  border: {
    type: Boolean,
    default: false
  },
  shadow: {
    type: Boolean,
    default: true
  },
  look: {
    type: String,
    default: 'clean',
    validator: (value) => ['clean', 'inverted', 'dark'].includes(value)
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
  switch (props.look) {
    case 'dark':
      return {
        'primary': 'bg-blue-600 hover:bg-blue-500 focus-visible:outline-blue-600',
        'secondary': 'bg-gray-600 hover:bg-gray-500 focus-visible:outline-gray-600',
        'info': 'bg-teal-600 hover:bg-teal-500 focus-visible:outline-teal-600',
        'success': 'bg-green-600 hover:bg-green-500 focus-visible:outline-green-600',
        'warning': 'bg-yellow-600 hover:bg-yellow-500 focus-visible:outline-yellow-600',
        'danger': 'bg-red-600 hover:bg-red-500 focus-visible:outline-red-600',
        'light': 'bg-gray-200 hover:bg-gray-300 focus-visible:outline-gray-200'
      };
    case 'inverted':
      return {
        'primary': 'bg-blue-100 hover:bg-blue-500 focus-visible:outline-blue-600',
        'secondary': 'bg-gray-100 hover:bg-gray-500 focus-visible:outline-gray-600',
        'info': 'bg-teal-100 hover:bg-teal-500 focus-visible:outline-teal-600',
        'success': 'bg-green-100 hover:bg-green-500 focus-visible:outline-green-600',
        'warning': 'bg-yellow-100 hover:bg-yellow-500 focus-visible:outline-yellow-600',
        'danger': 'bg-red-100 hover:bg-red-500 focus-visible:outline-red-600',
        'light': 'bg-gray-100 hover:bg-gray-300 focus-visible:outline-gray-200'
      };
    default:
      return {
        'primary': 'bg-white hover:bg-blue-600 focus-visible:outline-blue-600',
        'secondary': 'bg-white hover:bg-gray-600 focus-visible:outline-gray-600',
        'info': 'bg-white hover:bg-teal-600 focus-visible:outline-teal-600',
        'success': 'bg-white hover:bg-green-600 focus-visible:outline-green-600',
        'warning': 'bg-white hover:bg-yellow-600 focus-visible:outline-yellow-600',
        'danger': 'bg-white hover:bg-red-600 focus-visible:outline-red-600',
        'light': 'bg-white hover:bg-gray-600 focus-visible:outline-gray-200'
      };
  }
});
const colorClasses = computed(() => {
  switch (props.look) {
    case 'dark':
      return {
        'primary': 'text-white',
        'secondary': 'text-white',
        'info': 'text-white',
        'success': 'text-white',
        'warning': 'text-white',
        'danger': 'text-white',
        'light': 'text-gray-800'
      };
    case 'inverted':
      return {
        'primary': 'text-blue-600 hover:text-white',
        'secondary': 'text-gray-600 hover:text-white',
        'info': 'text-teal-600 hover:text-white',
        'success': 'text-green-600 hover:text-white',
        'warning': 'text-yellow-600 hover:text-white',
        'danger': 'text-red-600 hover:text-white',
        'light': 'text-gray-60 hover:text-white0'
      };
    default:
      return {
        'primary': 'text-blue-600 hover:text-white',
        'secondary': 'text-gray-600 hover:text-white',
        'info': 'text-teal-600 hover:text-white',
        'success': 'text-green-600 hover:text-white',
        'warning': 'text-yellow-600 hover:text-white',
        'danger': 'text-red-600 hover:text-white',
        'light': 'text-gray-60 hover:text-white0'
      };
  }
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
const shadowSizeClasses = computed(() => {
  return {
    'sm': 'shadow-sm',
    'md': 'shadow-sm',
    'lg': 'shadow-md',
    'xl': 'shadow-md',
    '2xl': 'shadow-md',
    '3xl': 'shadow-lg',
  };
});
const borderClasses = computed(() => {
  switch (props.look) {
    case 'dark':
      return fillUpAllVariants('theme', 'border-gray-400');
    case 'inverted':
      return fillUpAllVariants('theme', 'border-gray-300');
    default:
      return {
        'primary': 'border-blue-600',
        'secondary': 'border-gray-600',
        'info': 'border-teal-600',
        'success': 'border-green-600',
        'warning': 'border-yellow-600',
        'danger': 'border-red-600',
        'light': 'border-gray-200'
      };
  }
})
const shadowColorClasses = computed(() => {
  switch (props.look) {
    case 'dark':
      return fillUpAllVariants('theme', 'shadow-gray-400');
    case 'inverted':
      return fillUpAllVariants('theme', 'shadow-gray-300');
    default:
      return {
        'primary': 'shadow-blue-600/20',
        'secondary': 'shadow-gray-600/20',
        'info': 'shadow-teal-600/20',
        'success': 'shadow-green-600/20',
        'warning': 'shadow-yellow-600/20',
        'danger': 'shadow-red-600/20',
        'light': 'shadow-gray-20/200'
      };
  }
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
    props.shadow ? [ shadowSizeClasses.value[props.size], shadowColorClasses.value[props.variant] ] : null,
    'focus-visible:outline',
    'transition-all',
      props.border ? [ 'border', borderClasses.value[props.variant] ] : null,
    {
      'block': props.block,
      'rounded-md': props.rounded,
      'text-gray-700': props.outline,
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
