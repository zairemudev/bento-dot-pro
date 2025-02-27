<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import AppLayout from "../layouts/AppLayout.vue";
import {
  SquareKanban,
  List,
  PlusCircle,
  Filter,
  ArrowDownUp,
} from "lucide-vue-next";

const route = useRoute();
const activeView = ref<string>("list");

const setActiveView = (value: string) => {
  activeView.value = value;
  console.log("setActiveView:", activeView.value);
};

const views = [
  {
    value: "list",
    label: "List",
    icon: List,
  },
  {
    value: "board",
    label: "Board",
    icon: SquareKanban,
  },
];

console.log("activeView:", activeView.value);

onMounted(() => {
  activeView.value = "list";
});
</script>
<template>
  <AppLayout>
    <div class="w-full py-6 flex flex-col gap-6 overflow-scroll">
      <!-- header -->
      <div class="flex justify-between items-end min-h-9">
        <!-- title -->
        <p class="text-xl font-bold">
          Projects
           <!-- <span class="text-sm font-normal text-gray-500">(40)</span> -->
        </p>
        <!-- controller -->
        <div class="flex gap-2">
          <!-- create -->
          <button
            class="cursor-pointer rounded-md bg-gray-100 p-2 px-2.5 text-gray-500 transition hover:text-gray-500/75 inline-flex items-center gap-2"
          >
            <PlusCircle :size="18" />
            <span class="text-xs hidden lg:block">Project</span>
          </button>
          <div class="border-[0.5px] border-gray-100"></div>
          <!-- filter -->
          <button
            class="cursor-pointer rounded-md bg-gray-100 p-2 px-2.5 text-gray-500 transition hover:text-gray-500/75 inline-flex items-center gap-2"
          >
            <Filter :size="18" />
            <span class="text-xs hidden lg:block">Filter</span>
          </button>
          <!-- sort -->
          <button
            class="cursor-pointer rounded-md bg-gray-100 p-2 px-2.5 text-gray-500 transition hover:text-gray-500/75 inline-flex items-center gap-2"
          >
            <ArrowDownUp :size="18" />
            <span class="text-xs hidden lg:block">Sort</span>
          </button>
          <div class="border-[0.5px] border-gray-100"></div>
          <!-- view -->
          <div
            class="inline-flex rounded-lg border border-gray-100 bg-gray-100 p-1 gap-2"
          >
            <template v-for="view in views">
              <button
                @click="setActiveView(view.value)"
                :class="`${
                  view.value === activeView ? 'bg-white' : ''
                } cursor-pointer inline-flex items-center gap-2 rounded-md p-1 px-1.5 text-gray-500 hover:text-gray-500/75 focus:relative`"
              >
                <component :is="view.icon" :size="18" />

                <span class="text-xs hidden lg:block">{{ view.label }}</span>
              </button>
            </template>
          </div>
        </div>
      </div>
      <!-- content -->
      <div></div>
    </div>
  </AppLayout>
</template>
