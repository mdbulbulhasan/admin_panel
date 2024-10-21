<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

//Define an array of menu items
const menuItems = [
  {
    icon: ['fas', 'clipboard-list'],
    text: 'DASHBOARD',
    route: '/AdminPanel',
  },
  {
    icon: ['fas', 'table-list'],
    text: 'TABLE LIST',
    route: '/AdminPanel/TableList',
  },
  {
    icon: ['fas', 'user'],
    text: 'USER PROFILE',
    route: '/AdminPanel',
  },
  {
    icon: ['fas', 't'],
    text: 'TYPOGRAPHY',
    route: '/AdminPanel',
  },
  {
    icon: ['fas', 'pencil'],
    text: 'ICONS',
    route: '/AdminPanel',
  },
  {
    icon: ['fas', 'map'],
    text: 'MAPS',
    route: '/AdminPanel',
  },
  {
    icon: ['fas', 'bell'],
    text: 'NOTIFICATIONS',
    route: '/AdminPanel',
  },
  {
    icon: ['fas', 'arrow-up-from-bracket'],
    text: 'UPDATE TO PRO',
    route: '/AdminPanel',
  },
];

</script>

<template>
  <ul class="flex flex-col gap-5 bg-white shadow-lg shadow-black h-screen p-5 text-xl text-[rgba(0,0,0,0.75)] font-semibold">
    <li v-for="item in menuItems" :key="item.text" class="h-14 flex gap-[0.8rem] pl-8 items-center justify-start bg-[rgba(0,0,0,0.04)] hover:bg-[rgba(0,0,0,0.3)] rounded group">
      <font-awesome-icon :icon="item.icon" class="text-3xl text-[rgba(0,0,0,0.35)] group-hover:text-[rgba(255,255,255,0.70)]" />
      <router-link :to="item.route" class="hover:font-semibold group-hover:text-white">{{ item.text }}</router-link>
    </li>
  </ul>
</template>

