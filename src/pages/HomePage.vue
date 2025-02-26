<script setup lang="ts">
import {
  House,
  LayoutDashboard,
  LayoutList,
  Folder,
  Pencil,
  Trash2,
  Plus,
  FolderPlus,
  BrickWall,
  SquareKanban,
  LayoutTemplate,
  List,
  Table,
  ChevronLeft,
  ChevronRight,
  CircleCheck,
  Calendar,
} from "lucide-vue-next";

import Header from "../components/Header.vue";
import SideNavebar from "../components/SideNavbar.vue";
import Footer from "../components/Footer.vue";
import AppLayout from "../layouts/AppLayout.vue";
</script>

<template>
  <!-- 
  <House color="red" :size="32" />
  <LayoutDashboard />
  <LayoutList />
  <Folder />
  <Pencil />
  <Trash2 />
  <Plus />
  <FolderPlus />
  <BrickWall />
  <SquareKanban />
  <LayoutTemplate />
  <List />
  <Table />
  <ChevronLeft />
  <ChevronRight /> -->

  <AppLayout>
    <div class="h-full w-full py-6 flex flex-col gap-6">
      <!-- statistic -->
      <div class="grid gap-4 grid-cols-2 xl:grid-cols-4 lg:gap-6">
        <div
          class="h-32 gap-4 rounded-lg shadow bg-yellow-100 border border-yellow-100 p-6 flex items-center"
        >
          <span class="rounded-full bg-white p-3">
            <Calendar strokeWidth="3" size="32" />
          </span>

          <div>
            <p class="text-sm text-gray-500">Wednesday</p>
            <p class="text-xl sm:text-2xl font-medium text-gray-900">
              26/02/2025
            </p>
          </div>
        </div>
        <div
          class="h-32 gap-4 rounded-lg shadow border border-gray-100 bg-white p-6 flex items-center"
        >
          <span class="rounded-full bg-yellow-100 p-3">
            <Folder strokeWidth="3" size="32" />
          </span>

          <div>
            <p class="text-3xl font-medium text-gray-900">40</p>

            <p class="text-sm text-gray-500">Projects</p>
          </div>
        </div>
        <div
          class="h-32 gap-4 rounded-lg shadow border border-gray-100 bg-white p-6 flex items-center"
        >
          <span class="rounded-full bg-yellow-100 p-3">
            <List strokeWidth="3" size="32" />
          </span>

          <div>
            <p class="text-3xl font-medium text-gray-900">140</p>

            <p class="text-sm text-gray-500">Tasks</p>
          </div>
        </div>
        <div
          class="h-32 gap-4 rounded-lg shadow border border-gray-100 bg-white p-6 flex items-center"
        >
          <span class="rounded-full bg-yellow-100 p-3">
            <CircleCheck strokeWidth="3" size="32" />
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
          <div class="h-full grid grid-cols-1 gap-4 lg:grid-row-2 lg:gap-6 p-4">
            <div class="min-h-36 h-full">Current projects</div>
            <div class="min-h-36 h-full">Upcoming projects</div>
          </div>
        </div>
        <!-- tasks section -->
        <div
          class="min-h-36 h-full rounded-lg shadow border border-gray-100 bg-white"
        >
          <div class="h-full grid grid-cols-1 gap-4 lg:grid-row-2 lg:gap-6 p-4">
            <div class="min-h-36 h-full">Current task</div>
            <div class="min-h-36 h-full">Upcoming task</div>
          </div>
        </div>
      </div>
    </div>
  </AppLayout>
</template>
