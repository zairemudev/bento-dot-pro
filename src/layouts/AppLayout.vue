<script setup lang="ts">
import Header from "../components/Header.vue";
import SideNavbar from "../components/SideNavbar.vue";
import Footer from "../components/Footer.vue";
</script>
<template>
  <div class="h-screen w-screen flex flex-col">
    <!-- header -->
    <Header />

    <!-- main container -->
    <main
      class="w-full flex flex-1 max-w-screen-3xl gap-6 px-4 sm:px-6 lg:px-8 h-full overflow-scroll"
    >
      <SideNavbar />
      <slot />
    </main>

    <!-- footer -->
    <Footer />
  </div>
</template>
