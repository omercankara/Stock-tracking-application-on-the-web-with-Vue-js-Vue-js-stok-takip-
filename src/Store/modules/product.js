import Vue from "vue"
import vue from "vue"

const state = {
        products: [] //Urunlerin id adet aciklama vs objeleri olacak
}

const getters = {
        getProducts(state) { //butun urunleri getir
                return state.products
        },
        getProduct(state) { //seçilen urunu getir
               return key =>  state.products.filter(element => {
                        return element.key == key
                })
        }
}


const mutations = { //products' dizisini yani urun listesini güncellicek
        updateProductsList(state, product) { //product dışarıdan gelicek olan veri 
                state.products.push(product)
        }
}

const actions = { //dış dünya üzerinde güncelleme yapmak için actions  yardımıyla mutations kullanıcaz
        initApp({ commit }) { //Uyguluma yüklendiginide verileri çek
                //Vue resource işlemleri...
                vue.http.get("https://urunislemleri-af889-default-rtdb.firebaseio.com/products.json")
                        .then(response => {
                                let data = response.body
                                for (let key in data) {
                                        data[key].key = key
                                        commit("updateProductsList", data[key]) //Mutationsa yolla oradan da push edicek
                                }
                        })
        },
        saveProduct({ dispatch, commit, state }, product) { //işlemi firebase Üzerinde yapacak,  payload dışarıdan gelcek
                //Vue resource işlemleri...
                vue.http.post("https://urunislemleri-af889-default-rtdb.firebaseio.com/products.json", product)
                        /************** Ürün listesi güncelleme*****************/
                        .then((response) => { //Firebase den gelen cevap
                                product.key = response.body.name
                                commit("updateProductsList", product) //Mutations içindeki update productList parametresi


                                /************Alış satış bakiye gücnellemesi*****************/
                                let tradeResult = {
                                        purchase: product.price,
                                        sale: 0,
                                        count: product.count
                                }
                                dispatch("setTradeResult", tradeResult)
                        })
        },

        sellProduct({state, commit,dispatch}, payload){
                let product = state.products.filter(element=>{
                        return element.key == payload.key
                })
                if(product){
                    let totalCount = product[0].count - payload.count
                    Vue.http.patch("https://urunislemleri-af889-default-rtdb.firebaseio.com/products/"+payload.key + ".json",{count : totalCount})  
                        .then(response=>{
                                console.log(response)
                                product[0].count = totalCount

                                let tradeResult = {
                                        purchase:0,
                                        sale:product[0].price,
                                        count:payload.count
                                }
                                dispatch("setTradeResult",tradeResult)
                        })
                }
                
        }
}



export default { // aşşağıdaki yapıları dışarı aç 
        state,
        getters,
        mutations,
        actions
}