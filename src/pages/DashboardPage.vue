<script setup lang="ts">
import { Folder, LayoutList, CircleCheck, Calendar } from "lucide-vue-next";

import AppLayout from "../layouts/AppLayout.vue";
</script>
<template>
  <AppLayout>
    <div class="w-full py-6 flex flex-col gap-6 overflow-scroll">
      <!-- header -->
      <div class="flex justify-between items-end min-h-9">
        <!-- title -->
        <p class="text-xl font-bold">Dashboard</p>
        <!-- controller -->
        <div class="flex gap-2"></div>
      </div>
      <!-- content -->
      <div class="h-full w-full flex flex-col gap-6">
        <!-- statistic -->
        <div class="grid gap-4 grid-cols-2 xl:grid-cols-4 lg:gap-6">
          <div
            class="h-32 gap-4 rounded-lg shadow bg-yellow-100 border border-yellow-100 p-4 flex items-center"
          >
            <span class="rounded-full bg-white p-3">
              <Calendar strokeWidth="2" :size="30" />
            </span>

            <div>
              <p class="text-sm text-gray-500">Wednesday</p>
              <p class="text-xl sm:text-2xl font-medium text-gray-900">
                26/02/2025
              </p>
            </div>
          </div>
          <div
            class="h-32 gap-4 rounded-lg shadow border border-gray-100 bg-white p-4 flex items-center"
          >
            <span class="rounded-full bg-yellow-100 p-3">
              <Folder strokeWidth="2" :size="30" />
            </span>

            <div>
              <p class="text-3xl font-medium text-gray-900">40</p>

              <p class="text-sm text-gray-500">Projects</p>
            </div>
          </div>
          <div
            class="h-32 gap-4 rounded-lg shadow border border-gray-100 bg-white p-4 flex items-center"
          >
            <span class="rounded-full bg-yellow-100 p-3">
              <LayoutList strokeWidth="2" :size="30" />
            </span>

            <div>
              <p class="text-3xl font-medium text-gray-900">140</p>

              <p class="text-sm text-gray-500">Tasks</p>
            </div>
          </div>
          <div
            class="h-32 gap-4 rounded-lg shadow border border-gray-100 bg-white p-4 flex items-center"
          >
            <span class="rounded-full bg-yellow-100 p-3">
              <CircleCheck strokeWidth="2" :size="30" />
            </span>

            <div>
              <p class="text-3xl font-medium text-gray-900">50%</p>

              <p class="text-sm text-gray-500">Completed</p>
            </div>
          </div>
        </div>

        <!-- list -->
        <div class="h-full grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
          <!-- projects section -->
          <div
            class="min-h-36 h-full rounded-lg shadow border border-gray-100 bg-white"
          >
            <div
              class="h-full grid grid-cols-1 gap-4 lg:grid-row-2 lg:gap-6 p-4"
            >
              <div class="min-h-36 h-full">Current projects</div>
              <div class="min-h-36 h-full">Upcoming projects</div>
            </div>
          </div>
          <!-- tasks section -->
          <div
            class="min-h-36 h-full rounded-lg shadow border border-gray-100 bg-white"
          >
            <div
              class="h-full grid grid-cols-1 gap-4 lg:grid-row-2 lg:gap-6 p-4"
            >
              <div class="min-h-36 h-full">Current task</div>
              <div class="min-h-36 h-full">Upcoming task</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AppLayout>
</template>
