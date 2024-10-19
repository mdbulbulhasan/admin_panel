import { createRouter, createWebHistory } from "vue-router";

import HomeLayout from "@/pages/HomeLayout.vue";
import AdminLayout from "@/pages/AdminLayout.vue";
import Content from "@/components/Content.vue";
import TableList from "@/components/TableList.vue";

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
            children: [
                {
                    path: "",
                    component: Content,
                },
                {
                    path: "/AdminPanel/TableList",
                    component: TableList,
                }
            ],
        },
    ],
});


export default router;