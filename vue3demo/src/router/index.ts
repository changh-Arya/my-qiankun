import { createRouter, createWebHistory,RouteRecordRaw } from 'vue-router';
import Order from "../views/Order.vue"
import SaleOrder from "../views/SaleOrder.vue"

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: Order
    },
    {
        path: '/sale',
        component: SaleOrder,
    }
]
const router = createRouter({
    routes,
    // 路由模式
    history: createWebHistory("/vue3")
})
export default router;