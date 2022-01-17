import Vue from "vue"
import vuex from "vuex"
import product from "./modules/product"
import * as  getters  from "./getters"
import * as mutations from "./mutations"
import * as actions from "./actions"
Vue.use(vuex)

export const store = new vuex.Store({
        state:{
                purchase:0.0, //Mağazaya Alınan ürünler  
                sale:0.0, //Ürün çıkışı ile artacak
                balance:0.0 //Balanca dan purchase çıkacak
        },
        getters,
        mutations,
        actions,
        modules:{
                product
        }
})