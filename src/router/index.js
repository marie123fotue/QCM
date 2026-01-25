 
import { createRouter, createWebHistory } from "vue-router"

import Accueil from "@/views/Accueil.vue"
import Qcm from "@/views/qcm.vue";
import Portefolio from "@/views/Portefoli.vue";
import Portefoli from "@/views/PortefolioFinale.vue";
import Baniere from "@/views/baniereLinkledin.vue";




const routes = [
    { path: "/Qcm",component: Qcm},
    { path: "/Accueil",component: Accueil},
    { path: "/ngh",component: Portefolio},
      { path: "/",component: Portefoli},
    { path: "/ii",component: Baniere},

]

const router =createRouter({
    history:createWebHistory(),
    routes
});

export default router