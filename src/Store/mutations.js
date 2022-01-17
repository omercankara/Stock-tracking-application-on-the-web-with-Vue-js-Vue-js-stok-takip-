export const updateTradeResult = (state, payload) => { //Dışarıdan obje gelicek o obje payload state de bulunan purchase sale ya da balancı güncellikce
        if (payload.count) {
                state.purchase += parseFloat(payload.purchase) * parseInt(payload.count)
                state.sale += parseFloat(payload.sale) * parseInt(payload.count)
        } else {
                state.purchase += parseFloat(payload.purchase) 
                state.sale += parseFloat(payload.sale) 
        } 
        state.balance = parseFloat(state.sale) - parseFloat(state.purchase)
}