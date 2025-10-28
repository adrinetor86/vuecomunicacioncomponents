import SeleccionMultiple from "@/components/SeleccionMultiple.vue";
import CheckboxMultiple from "@/components/CheckboxMultiple.vue";
import {createRouter, createWebHistory} from "vue-router";

const routes=[
    {path:'/seleccionmultiple',component:SeleccionMultiple},
    {path:'/sumachecks',component:CheckboxMultiple}
]

const router=createRouter(
    {
        history:createWebHistory(),
        routes:routes
    }
)

export default router;