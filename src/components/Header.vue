<script setup lang="ts">
import { RouterLink } from "vue-router";
import {
  LayoutTemplate,
  Menu,
  FolderPlus,
  Search,
  Command,
} from "lucide-vue-next";
import {
  PopoverArrow,
  PopoverClose,
  PopoverContent,
  PopoverPortal,
  PopoverRoot,
  PopoverTrigger,
} from "reka-ui";
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
            size="32"
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
            class="w-full border border-gray-100 rounded-xl max-w-md focus:outline-none p-2 pl-4 pr-8"
            placeholder="Search"
          />
          <Search class="md:absolute right-2 text-gray-400" size="16" />
        </div>

        <button
          class="flex items-center md:hidden border border-gray-100 p-1 rounded-xl px-2"
        >
          <Search class="md:absolute right-2 text-gray-400" size="16" />

          <Command size="12" class="ml-2" />
          <span class="text-sm">K</span>
        </button>
      </div>

      <!-- create project -->
      <div class="flex items-center justify-end">
        <button
          class="rounded-md bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 hidden md:flex items-center"
        >
          <FolderPlus size="20" />
          <span class="ml-2 text-sm">New project</span>
        </button>
        <button
          class="block rounded-md bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 md:hidden"
        >
          <Menu />
        </button>
      </div>
    </div>
  </header>
</template>
