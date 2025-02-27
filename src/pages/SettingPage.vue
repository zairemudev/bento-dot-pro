<script setup lang="ts">
import { ref, reactive } from "vue";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import { Check, ChevronDown } from "lucide-vue-next";

import AppLayout from "../layouts/AppLayout.vue";

const projectUpcomingTimePeriods = [
  { value: "seven", label: "7 days" },
  { value: "halfMonth", label: "15 days" },
  { value: "1Month", label: "1 Month" },
  { value: "3Month", label: "1 Months" },
  { value: "6Month", label: "6 Months" },
  { value: "1Year", label: "1 Year" },
];

const taskUpcomingTimePeriods = [
  { value: "15m", label: "15 minutes" },
  { value: "30m", label: "30 minutes" },
  { value: "1h", label: "1 hour" },
  { value: "12h", label: "12 hours" },
  { value: "1day", label: "1 Day" },
];
const selectedProjectUpcomingTimePeriods = ref(projectUpcomingTimePeriods[0]);
const selectedTaskUpcomingTimePeriods = ref(taskUpcomingTimePeriods[0]);
</script>
<template>
  <AppLayout>
    <div class="w-full py-6 flex flex-col gap-6 overflow-scroll">
      <!-- header -->
      <div class="flex justify-between items-end min-h-9">
        <!-- title -->
        <p class="text-xl font-bold">Settings</p>
        <!-- controller -->
        <div class="flex gap-2"></div>
      </div>
      <!-- content -->
      <div class="w-full grid grid-cols-1 gap-4">
        <!-- project setting -->
        <div class="block">
          <p class="font-bold mb-6 border-b border-gray-100">Project</p>
          <div class="flex gap-2 items-baseline">
            <label for="project">Show upcoming project before:</label>
            <Listbox
              as="div"
              class="min-w-[150px] w-fit relative text-sm"
              v-model="selectedProjectUpcomingTimePeriods"
            >
              <ListboxButton
                class="z-0 bg-white w-full border border-gray-200 p-1 px-2 rounded-lg inline-flex gap-2 items-center justify-between"
                >{{ selectedProjectUpcomingTimePeriods.label }}
                <ChevronDown :size="16" />
              </ListboxButton>
              <transition
                enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-out"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
              >
                <ListboxOptions
                  as="div"
                  class="bg-white z-10 absolute w-full mt-1 border border-gray-200 p-2 rounded-lg flex flex-col gap-1"
                >
                  <ListboxOption
                    v-for="period in projectUpcomingTimePeriods"
                    :key="period.value"
                    :value="period"
                    as="div"
                    v-slot="{ active, selected }"
                  >
                    <div
                      :class="{
                        'bg-yellow-50 ': active || selected,
                        'bg-white': !active,
                      }"
                      class="flex items-center gap-2 py-1 px-2 rounded-md text-sm"
                    >
                      <!-- <Check v-show="selected" :size="16" /> -->
                      {{ period.label }}
                    </div>
                  </ListboxOption>
                </ListboxOptions></transition
              >
            </Listbox>
          </div>
        </div>
        <!-- task setting -->
        <div class="block">
          <p class="font-bold mb-6 border-b border-gray-100">Task</p>
          <div class="flex gap-2 items-baseline">
            <label for="project">Show upcoming task before:</label>
            <Listbox
              as="div"
              class="min-w-[150px] w-fit relative text-sm"
              v-model="selectedTaskUpcomingTimePeriods"
            >
              <ListboxButton
                class="z-0 bg-white w-full border border-gray-200 p-1 px-2 rounded-lg inline-flex gap-2 items-center justify-between"
                >{{ selectedTaskUpcomingTimePeriods.label }}
                <ChevronDown :size="16" />
              </ListboxButton>
              <transition
                enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-out"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
              >
                <ListboxOptions
                  as="div"
                  class="z-10 bg-white absolute w-full mt-1 border border-gray-200 p-2 rounded-lg flex flex-col gap-1"
                >
                  <ListboxOption
                    v-for="period in taskUpcomingTimePeriods"
                    :key="period.value"
                    :value="period"
                    as="div"
                    v-slot="{ active, selected }"
                  >
                    <div
                      :class="{
                        'bg-yellow-50 ': selected,
                        'bg-gray-50 ': active,
                        'bg-white': !active,
                      }"
                      class="flex items-center gap-2 py-1 px-2 rounded-md text-sm"
                    >
                      <!-- <Check v-show="selected" :size="16" /> -->
                      {{ period.label }}
                    </div>
                  </ListboxOption>
                </ListboxOptions></transition
              >
            </Listbox>
          </div>
        </div>
      </div>
    </div>
  </AppLayout>
</template>
