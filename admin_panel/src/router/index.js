import { createRouter, createWebHistory } from "vue-router";

import HomeLayout from "@/pages/HomeLayout.vue";
import AdminLayout from "@/pages/AdminLayout.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeLayout,
        },
        {
            path: "/AdminPanel",
            name: "admin",
            component: AdminLayout,
        },
    ],
});


export default router;