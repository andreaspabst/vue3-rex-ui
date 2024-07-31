<template>
  <div :class="classesWrapper">
    <input
        :type="type"
        :class="classesInput"
        :placeholder="placeholder"
        :value="modelValue"
        @input="handleChange"
    />
  </div>
</template>
<script setup>
// input text component
import {computed} from 'vue';
const emit = defineEmits(['click', 'input', 'update:modelValue']);
const handleClick = () => {
  emit('click');
};
const handleChange = (event) => {
  emit('input', event.target.value);
  emit('update:modelValue', event.target.value);
};
const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
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
  type: {
    type: String,
    default: 'text',
    validator: (value) => ['text', 'password', 'email', 'number', 'tel', 'url'].includes(value),
  },
  placeholder: {
    type: String,
    default: '',
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
  },
  shadow: {
    type: Boolean,
    default: true
  },
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

const shadowSizeClasses = computed(() => {
  return {
    'sm': 'shadow-sm',
    'md': 'shadow-sm',
    'lg': 'shadow-md',
    'xl': 'shadow-md',
    '2xl': 'shadow-lg',
    '3xl': 'shadow-lg',
  };
});

const borderClasses = computed(() => {
  return {
    'default' : 'border-gray-200',
    'primary': 'border-blue-500',
    'secondary': 'border-gray-500',
    'info': 'border-teal-500',
    'success': 'border-green-500',
    'warning': 'border-yellow-500',
    'danger': 'border-red-500',
    'light': 'border-gray-500',
  };
});

const colorClsases = computed(() => {
  return {
    'default' : 'text-gray-800',
    'primary': 'text-gray-900',
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
    'sm': 'px-2 py-1',
    'md': 'px-3 py-1.5',
    'lg': 'px-4 py-2',
    'xl': 'px-5 py-2.5',
    '2xl': 'px-6 py-3',
    '3xl': 'px-7 py-3.5',
  };
});

const pyClasses = computed(() => {
  return {
    'sm': 'py-1',
    'md': 'py-1.5',
    'lg': 'py-2',
    'xl': 'py-2.5',
    '2xl': 'py-3',
    '3xl': 'py-3.5',
  };
});

const textSizeClasses = computed(() => {
  return {
    'sm': 'text-xs',
    'md': 'text-sm',
    'lg': 'text-base',
    'xl': 'text-lg',
    '2xl': 'text-xl',
    '3xl': 'text-2xl',
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

const classesWrapper = computed(() => {
  return [
    'relative',
    'flex',
    'items-center',
    'space-x-2',
    'border',
    'border-gray-300',
    'rounded-md',
    'bg-white',
    'focus-within:border-blue-500',
    borderClasses.value[props.variant],
    bgColorClasses.value[props.variant],
  ];
});

const classesInput = computed(() => {
  return [
    'w-full',
    'py-2',
    'px-3',
    'text-gray-900',
    'bg-transparent',
    'outline-none',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-blue-500',
    'focus:ring-opacity-50',
    'rounded-md',
    textSizeClasses.value[props.size],
    shadowSizeClasses.value[props.size],
  ];
});

</script>