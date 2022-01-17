export const getTradeResult  =  (state)=> {    // Ticaret sonuçlarını getir
        return{
                purchase:state.purchase,
                sale:state.sale,
                balance:state.balance
        }

} 