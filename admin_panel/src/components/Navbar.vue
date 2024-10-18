<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
</script>

<template>
  <nav class="mt-1 p-8 w-full h-20 flex justify-between items-center rounded-md shadow-sm">
      <div>
        <font-awesome-icon :icon="['fas', 'bars']" class="text-xl cursor-pointer lg:hidden flex" />
      </div>
    <ul class="flex gap-3 p-1.5 m-1 text-2xl">
      <li><a href="" class="hover:text-red-600 hover:font-semibold">Stats</a></li>
      <li><a href="" class="hover:text-red-600 hover:font-semibold">Notifications</a></li>
      <li><a href="" class="hover:text-red-600 hover:font-semibold">Settings</a></li>
    </ul>
  </nav>
  <hr>
</template>

<style>

</style>