<script setup lang="ts">
interface IconButtonProps {
  icon: string;
  iconSize: number;
  label: string;
}
const { icon, iconSize = 16, label = "" } = defineProps<IconButtonProps>();
</script>
<template>
  <button
    class="cursor-pointer rounded-md bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 hidden md:flex items-center"
  >
    <component :is="icon" :size="iconSize" />
    <span class="ml-2 text-sm">{{ label }}</span>
  </button>
</template>
