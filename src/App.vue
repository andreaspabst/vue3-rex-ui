<template>
  <div class="container mt-5">
    <h1 class="text-3xl font-bold">Vue3 Rex UI</h1>
    <p>Vue3 Rex UI is a collection of components for Vue3.</p>
    <div class="space-y-3">
      <h2 class="text-2xl font-bold mt-5 border-b border-gray-200 pb-2">Alerts</h2>
      <p>Alerts are used to show a message to the user.</p>
      <h3 class="text-lg font-semibold mt-3">Alert Variants</h3>
      <div class="flex flex-col gap-2">
        <RexAlert v-for="variant in alertVariants" :variant="variant" :key="variant">{{ ucFirst(variant) }}</RexAlert>
      </div>
      <h3 class="text-lg font-semibold mt-3">Alert Sizes</h3>
      <div class="flex flex-col gap-2">
          <RexAlert v-for="size in alertSizes" :size="size" :key="size" :closable="true">{{ ucFirst(size) }}</RexAlert>
      </div>
    </div>
    <div class="space-y-3">
      <h2 class="text-2xl font-bold mt-5 border-b border-gray-200 pb-2">Buttons</h2>
      <p>Buttons are used to initialize an action.</p>
      <h3 class="text-lg font-semibold mt-3">Button Variants (Inverted Look)</h3>
      <div class="flex gap-2">
        <RexButton v-for="variant in buttonVariants" :variant="variant" look="inverted" :key="variant" @click="clickCallback">{{ ucFirst(variant) }}</RexButton>
      </div>
      <h3 class="text-lg font-semibold mt-3">Button Variants (Clean Look)</h3>
      <div class="flex gap-2">
        <RexButton v-for="variant in buttonVariants" :variant="variant" look="clean" :key="variant" @click="clickCallback">{{ ucFirst(variant) }}</RexButton>
      </div>
      <h3 class="text-lg font-semibold mt-3">Button Variants (Dark Look)</h3>
      <div class="flex gap-2">
        <RexButton v-for="variant in buttonVariants" :variant="variant" look="dark" :key="variant" @click="clickCallback">{{ ucFirst(variant) }}</RexButton>
      </div>
      <h3 class="text-lg font-semibold mt-3">Button Sizes</h3>
      <div class="flex gap-2">
        <span v-for="size in buttonSizes" :key="size">
          <RexButton :size="size" @click="clickCallback">{{ ucFirst(size) }}</RexButton>
        </span>
      </div>
    </div>
    <div class="space-y-3">
      <h2 class="text-2xl font-bold mt-5 border-b border-gray-200 pb-2">Inputs</h2>
      <p>Inputs are used to get data from the user.</p>
      <h3 class="text-lg font-semibold mt-3">Input Variants</h3>
      <div class="flex gap-2">
        <RexTextInput v-for="variant in inputVariants" :variant="variant" v-model="inputExampleContent" :key="variant" />
      </div>
      <h3 class="text-lg font-semibold mt-3">Input Sizes</h3>
      <div class="flex gap-2">
        <span v-for="size in inputSizes" :key="size">
          <RexTextInput :size="size" v-model="inputExampleContent" />
        </span>
      </div>
    </div>
    <div class="mt-10 mb-12">&nbsp;</div>
  </div>
</template>


<script setup>
import {computed, defineComponent, inject, onMounted, ref} from 'vue';
import RexAlert from '@/components/Rex/Alert/Alert.vue';
const alertSizes = ['sm', 'md', 'lg', 'xl', '2xl', '3xl'];
const alertVariants = ['primary', 'secondary', 'info', 'success', 'warning', 'danger', 'light'];

import RexButton from '@/components/Rex/Button/Button.vue';
const buttonSizes = ['sm', 'md', 'lg', 'xl', '2xl', '3xl'];
const buttonVariants = ['primary', 'secondary', 'info', 'success', 'warning', 'danger', 'light'];

import RexTextInput from '@/components/Rex/Input/InputText.vue';
const inputSizes = ['sm', 'md', 'lg', 'xl', '2xl', '3xl'];
const inputVariants = ['default', 'primary', 'secondary', 'info', 'success', 'warning', 'danger', 'light'];
const inputExampleContent = ref('Input Example Content');

const ucFirst = (string) => string.charAt(0).toUpperCase() + string.slice(1);
const clickCallback = () => {
  alert('Button clicked!');
};
</script>