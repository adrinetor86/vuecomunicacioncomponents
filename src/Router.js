import SeleccionMultiple from "@/components/SeleccionMultiple.vue";
import CheckboxMultiple from "@/components/CheckboxMultiple.vue";
import {createRouter, createWebHistory} from "vue-router";
import PadreComponent from "@/components/PadreComponent.vue";
import ComicsComponent from "@/components/ComicsComponent.vue";
import PadreNumeros from "@/components/PadreNumeros.vue";
import NumeroDoble from "@/components/numerodoble/NumeroDoble.vue";
import MenuTablaMultiplicar from "@/components/menutablamultiplicar/MenuTablaMultiplicar.vue";
import TablaMultiplicar from "@/components/tablamultiplicar/TablaMultiplicar.vue";

const myRoutes=[
    {path:"/", component:PadreComponent },
    {path:"/comics", component:ComicsComponent },
    {path:"/numeros", component:PadreNumeros},
    {path:'/seleccionmultiple',component:SeleccionMultiple},
    {path:'/sumachecks',component:CheckboxMultiple},
    {path:"/numerodoble/:numero?",component:NumeroDoble},
    {path:"/menutabla",component: MenuTablaMultiplicar},
    {path:"/tablamultiplicar/:numero",component:TablaMultiplicar},
]

const router=createRouter(
    {
        history:createWebHistory(),
        routes:myRoutes
    }
)

export default router;