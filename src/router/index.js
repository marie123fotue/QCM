 
import { createRouter, createWebHistory } from "vue-router"

import Accueil from "@/views/Accueil.vue"
import Qcm from "@/views/qcm.vue";


const routes = [
    { path: "/",component: Accueil},
    { path: "/qcm",component: Qcm},
]

const router =createRouter({
    history:createWebHistory(),
    routes
});

export default router