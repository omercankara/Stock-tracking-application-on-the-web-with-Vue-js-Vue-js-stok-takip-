import Vue from "vue"

export const setTradeResult = ({state,commit},tradeResult) => { // Verileri firebase set edicek tradeResult dışardan gelen veri
        commit("updateTradeResult",tradeResult) //Gelen veriyi tradeResult olarka mutationsa yolla
        let tradeData = {
                purchase : state.purchase,
                sale:state.sale
        }
        Vue.http.put("https://urunislemleri-af889-default-rtdb.firebaseio.com/trade-result.json", tradeData)
        .then(response=>{
                console.log(response)
        })
}








export const getTradeResult = ({commit}) => { //Sayfa açıldığında verileri direk getiricek
        Vue.http.get("https://urunislemleri-af889-default-rtdb.firebaseio.com/trade-result.json")
                .then(response=>{
                        console.log(response)
                        commit("updateTradeResult",response.body)
                })
}