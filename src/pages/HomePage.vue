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
 
  <AppLayout> home page </AppLayout>
</template>
