<script setup lang="ts">
import { onMounted } from "vue";
import { RouterLink, useRouter, useRoute } from "vue-router";
import {
  House,
  LayoutDashboard,
  Folder,
  Settings,
  LayoutList,
} from "lucide-vue-next";

const menus = [
  {
    path: "/",
    name: "home",
    label: "Overview",
    icon: House,
  },
  {
    path: "/projects",
    name: "projects",
    label: "Projects",
    icon: Folder,
  },
  {
    path: "/tasks",
    name: "tasks",
    label: "Tasks",
    icon: LayoutList,
  },

  {
    path: "/dashboard",
    name: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    path: "/settings",
    name: "settings",
    label: "Settings",
    icon: Settings,
  },
];
// const router = useRouter();
const route = useRoute();

onMounted(() => {
  // console.log("router: ", router);
  console.log("route:", route);
});
</script>
<template>
  <nav
    aria-label="Global"
    class="hidden pr-8 h-full md:flex gap-4 text-sm flex-col py-6 border-r border-gray-100"
  >
    <template v-for="menu in menus">
      <RouterLink :to="{ name: menu.name }">
        <button
          :class="`${
            route.name === menu.name
              ? 'text-gray-300 bg-gray-50  rounded-md w-full'
              : ''
          } p-2 lg:px-4 cursor-pointer h-[32px] w-full md:flex place-items-center gap-2 transition text-gray-500 hover:text-gray-500/75 hidden`"
        >
          <component :is="menu.icon" :size="20" />
          <span class="hidden lg:block">{{ menu.label }}</span>
        </button>
      </RouterLink>
    </template>
  </nav>
</template>
