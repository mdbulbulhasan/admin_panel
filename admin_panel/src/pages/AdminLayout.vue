<script setup>
import Navbar from "@/components/Navbar.vue";
import Content from "@/components/Content.vue";
import Sidebar from "@/components/Sidebar.vue";
</script>

<template>
  <section class="flex bg-gray-300 h-screen">
    <div class="w-[10%] hidden lg:flex md:hidden border-2">
      <Sidebar/>
    </div>
    <div class="w-[90%]">
      <Navbar/>
      <div class="font-bold shadow-2xl bg-white w-fit mx-auto flex justify-center items-center h-16 mb-5 mt-4 rounded-md">
        <h1 class="p-5">Dashboard</h1>
      </div>
      <Content/>
    </div>

  </section>



  <router-view />
</template>