<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
</script>

<template>
  <ul class="flex flex-col gap-5 bg-white shadow-lg shadow-black h-screen p-5 text-xl text-[rgba(0,0,0,0.75)] font-semibold">
    <li class="h-14 flex gap-[0.8rem] pl-8 items-center justify-start bg-[rgba(0,0,0,0.04)] hover:bg-[rgba(0,0,0,0.3)] rounded group">
      <font-awesome-icon :icon="['fas', 'clipboard-list']" class="text-3xl text-[rgba(0,0,0,0.35)] group-hover:text-[rgba(255,255,255,0.70)]" />
      <router-link to="/AdminPanel" class="hover:font-semibold group-hover:text-white">DASHBOARD</router-link>
    </li>
    <li class="h-14 flex gap-[0.8rem] pl-8 items-center justify-start bg-[rgba(0,0,0,0.04)] hover:bg-[rgba(0,0,0,0.3)] rounded group">
      <font-awesome-icon :icon="['fas', 'user']" class="text-3xl text-[rgba(0,0,0,0.35)] group-hover:text-[rgba(255,255,255,0.70)]" />
      <a href="" class="hover:font-semibold group-hover:text-white">USER PROFILE</a>
    </li>
    <li class="h-14 flex gap-[0.8rem] pl-8 items-center justify-start bg-[rgba(0,0,0,0.04)] hover:bg-[rgba(0,0,0,0.3)] rounded group">
      <font-awesome-icon :icon="['fas', 'table-list']" class="text-3xl text-[rgba(0,0,0,0.35)] group-hover:text-[rgba(255,255,255,0.70)]" />
      <router-link to="/AdminPanel/TableList" class="hover:font-semibold group-hover:text-white">TABLE LIST</router-link>
    </li>
    <li class="h-14 flex gap-[0.8rem] pl-8 items-center justify-start bg-[rgba(0,0,0,0.04)] hover:bg-[rgba(0,0,0,0.3)] rounded group">
      <font-awesome-icon :icon="['fas', 't']" class="text-3xl text-[rgba(0,0,0,0.35)] group-hover:text-[rgba(255,255,255,0.70)]" />
      <a href="" class="hover:font-semibold group-hover:text-white">TYPOGRAPHY</a>
    </li>
    <li class="h-14 flex gap-[0.8rem] pl-8 items-center justify-start bg-[rgba(0,0,0,0.04)] hover:bg-[rgba(0,0,0,0.3)] rounded group">
      <font-awesome-icon :icon="['fas', 'pencil']" class="text-3xl text-[rgba(0,0,0,0.35)] group-hover:text-[rgba(255,255,255,0.70)]" />
      <a href="" class="hover:font-semibold group-hover:text-white">ICONS</a>
    </li>
    <li class="h-14 flex gap-[0.8rem] pl-8 items-center justify-start bg-[rgba(0,0,0,0.04)] hover:bg-[rgba(0,0,0,0.3)] rounded group">
      <font-awesome-icon :icon="['fas', 'user']" class="text-3xl text-[rgba(0,0,0,0.35)] group-hover:text-[rgba(255,255,255,0.70)]" />
      <a href="" class="hover:font-semibold group-hover:text-white">MAPS</a>
    </li>
    <li class="h-14  flex gap-[0.8rem] pl-8 items-center justify-start bg-[rgba(0,0,0,0.04)] hover:bg-[rgba(0,0,0,0.3)] rounded group">
      <font-awesome-icon :icon="['fas', 'user']" class="text-3xl text-[rgba(0,0,0,0.35)] group-hover:text-[rgba(255,255,255,0.70)]" />
      <a href="" class="hover:font-semibold group-hover:text-white">NOTIFICATIONS</a>
    </li>
    <li class="h-14 flex gap-[0.8rem] pl-8 items-center justify-start bg-[rgba(0,0,0,0.04)] hover:bg-[rgba(0,0,0,0.3)] rounded group">
      <font-awesome-icon :icon="['fas', 'user']" class="text-3xl text-[rgba(0,0,0,0.35)] group-hover:text-[rgba(255,255,255,0.70)]" />
      <a href="" class="hover:font-semibold group-hover:text-white">UPGRADE TO PRO</a>
    </li>
  </ul>
</template>

