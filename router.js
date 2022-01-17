import Vue from "vue"
import vueRouter from "vue-router"
import productList from "./src/Components/productList"
import productSell from "./src/Components/productSell"
import productPurhcase from "./src/Components/productPurhcase"

Vue.use(vueRouter)

const routes  = [
        {path :'/', component:productList},
        {path :'/urun-cikisi', component:productSell},
        {path :'/urun-islemleri', component:productPurhcase},
        {path:"*",redirect:"/"}
]

export const router = new    vueRouter({
        mode:"history",
        routes
})