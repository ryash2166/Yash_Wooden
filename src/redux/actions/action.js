export const ADD_CART = (item) => {
    return {
        type:"ADD_TO_CART",
        payload:item
    }
}

export const CART_QUT_INCREASE = (item) => {
    return{
        type:"INCREASE_CART_COUNT",
        payload:item
    }
}

export const CART_QUT_DECREASE  = (item) => {
    return{
        type:"DECREASE_CART_COUNT",
        payload:item
    }
}

// export const TOTAL_AMOUNT = (amount) => {
//     return {
//         type:"SET_TOTAL_AMOUNT",
//         payload :amount,
//     }
// } 



export const REMOVE_CART = (id) => {
    return {
        type:"REMOVE_TO_CART",
        payload:id
    }
}

// WISHLIST ACTION
export const ADD_WISHLIST = (item) => {
    return {
        type:"ADD_TO_WISHLIST",
        payload:item
    }
}

export const REMOVE_WISHLIST = (id) => {
    return {
        type:"REMOVE_TO_WISHLIST",
        payload:id
    }
}


export const WISH_QUT_INCREASE = (item) => {
    return{
        type:"INCREASE_WISH_COUNT",
        payload:item
    }
}

export const WISH_QUT_DECREASE = (item) => {
    return{
        type:"DECREASE_WISH_COUNT",
        payload:item
    }
}