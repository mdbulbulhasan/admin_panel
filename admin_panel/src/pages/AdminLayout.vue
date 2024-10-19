<script setup>
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";
</script>

<template>
  <section class="flex bg-white h-screen">
    <div class="w-[10%] hidden lg:flex md:hidden border-2 lg:w-[20%]">
      <Sidebar/>
    </div>
    <div class="lg:w-[90%] bg-[rgba(0,0,0,0.1)] w-full">
      <Navbar/>
      <router-view />
    </div>
  </section>

</template>