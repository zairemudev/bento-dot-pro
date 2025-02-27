<script setup lang="ts">
// library
import { RouterLink } from "vue-router";
import { ref } from "vue";
import { useRoute } from "vue-router";

// components
import {
  LayoutTemplate,
  Menu,
  PlusCircle,
  Search,
  Command,
  Sun,
  Moon,
} from "lucide-vue-next";

// constants
const route = useRoute();
const isDarkMode = ref<boolean>(false);

// function
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  console.log("isDarkMode:", isDarkMode.value);
};
</script>

<template>
  <header class="bg-white">
    <div
      class="mx-auto flex flex-none h-16 max-w-screen-3xl items-center gap-6 px-4 sm:px-6 lg:px-8 justify-between border-b border-gray-100"
    >
      <!-- logo -->
      <RouterLink to="/">
        <div class="flex items-center">
          <LayoutTemplate
            :size="32"
            class="bg-yellow-400 rotate-10 rounded-sm shadow-sm"
          />
          <div class="font-medium text-2xl font-pacifico ml-2 hidden md:block">
            Bento<span class="text-yellow-400">.</span>pro
          </div>
        </div></RouterLink
      >

      <!-- search -->
      <div
        class="flex flex-1 items-center justify-end md:justify-center max-w-md relative"
      >
        <div class="relative items-center w-full hidden md:flex">
          <input
            type="text"
            class="w-full border border-gray-100 rounded-xl max-w-md focus:outline-none py-1.5 pl-4 pr-8"
            placeholder="Search"
          />
          <Search class="md:absolute right-2 text-gray-400" :size="16" />
        </div>

        <button
          class="flex items-center md:hidden border border-gray-100 p-1 rounded-xl px-2"
        >
          <Search class="md:absolute right-2 text-gray-400" :size="16" />

          <Command :size="12" class="ml-2" />
          <span class="text-sm">K</span>
        </button>
      </div>

      <!-- create project -->
      <div class="flex items-center justify-end gap-2">
        <button
          v-if="route.name === 'home'"
          class="cursor-pointer rounded-md bg-gray-100 p-2 px-2.5 text-gray-500 transition hover:text-gray-500/75 hidden md:flex gap-2 items-center"
        >
          <PlusCircle :size="18" />
          <span class="text-xs">Project</span>
        </button>
        <button
          className="cursor-pointer rounded-md bg-gray-100 p-2 px-2.5 text-gray-500 transition hover:text-gray-500/75 flex gap-2"
          @click="toggleDarkMode()"
        >
          <Sun v-if="isDarkMode" :size="18" />
          <Moon v-else :size="18" />
          <span class="text-xs hidden md:block">{{
            isDarkMode ? "Light" : "Dark"
          }}</span>
        </button>
        <button
          class="cursor-pointer block rounded-md bg-gray-100 p-2 px-2.5 text-gray-500 transition hover:text-gray-500/75 md:hidden"
        >
          <Menu :size="18" />
        </button>
      </div>
    </div>
  </header>
</template>
