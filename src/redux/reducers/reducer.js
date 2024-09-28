const localStoreData = localStorage.getItem('Ninico_data') !== null ? JSON.parse(localStorage.getItem('Ninico_data')) : {}

const initialCartState = {
    cartList: localStoreData.cartList === undefined ? [] : localStoreData.cartList
};

const initialWishState = {
    wishList: localStoreData.wishList === undefined ? [] : localStoreData.wishList
};

// const initialTotalAmountState = {
//     totalAmount: localStoreData.totalAmount.subTotal === 0 ? {
//         GST: 18.00,
//         Discount: 10.00,
//         subTotal: 0,
//         GSTAmount: 0,
//         discountAmount: 0,
//     } : localStoreData.totalAmount
// };

const updateLocalStorage = (key, data) => {
    const currentData = JSON.parse(localStorage.getItem('Ninico_data')) || {};
    // set local store data using key and value in object 
    // console.log(key,data);
    currentData[key] = data;
    localStorage.setItem('Ninico_data', JSON.stringify(currentData));
};

export const cartReducer = (state = initialCartState, action) => {
    let newState;
    switch (action.type) {
        case "ADD_TO_CART": {
            const FindCart = state.cartList.find(data => data.id === action.payload.id);
            if (FindCart === undefined) {
                newState = {
                    ...state,
                    cartList: [...state.cartList, action.payload]
                };
            } else {
                newState = state;
            }
            break;
        }
        case "REMOVE_TO_CART": {
            newState = {
                ...state,
                cartList: state.cartList.filter(data => data.id !== action.payload)
            };
            break;
        }
        case "INCREASE_CART_COUNT": {
            const updatedCartList = state.cartList.map(item => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        quantity: item.quantity + 1,
                    };
                }
                return item;
            });
            newState = {
                ...state,
                cartList: updatedCartList,
            };
            break;
        }
        case "DECREASE_CART_COUNT": {
            const updatedCartList = state.cartList.map(item => {
                if (item.id === action.payload.id && item.quantity > 1) {
                    return {
                        ...item,
                        quantity: item.quantity - 1
                    };
                }
                return item;
            });
            newState = {
                ...state,
                cartList: updatedCartList
            };
            break;
        }
        default: {
            newState = state;
            break;
        }
    }
    updateLocalStorage('cartList', newState.cartList);
    return newState;
};


export const wishReducer = (state = initialWishState, action) => {
    let newState;
    switch (action.type) {
        case "ADD_TO_WISHLIST": {
            const FindWish = state.wishList.find(data => data.id === action.payload.id);
            if (FindWish === undefined) {
                newState = {
                    ...state,
                    wishList: [...state.wishList, action.payload]
                };
            } else {
                newState = state;
            }
            break;
        }
        case "REMOVE_TO_WISHLIST": {
            newState = {
                ...state,
                wishList: state.wishList.filter(data => data.id !== action.payload)
            };
            break;
        }
        case "INCREASE_WISH_COUNT": {
            const updatedWishList = state.wishList.map(item => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    };
                }
                return item;
            });
            newState = {
                ...state,
                wishList: updatedWishList
            };
            break;
        }
        case "DECREASE_WISH_COUNT": {
            const updatedWishList = state.wishList.map(item => {
                if (item.id === action.payload.id && item.quantity > 1) {
                    return {
                        ...item,
                        quantity: item.quantity - 1
                    };
                }
                return item;
            });
            newState = {
                ...state,
                wishList: updatedWishList
            };
            break;
        }
        default: {
            newState = state;
            break;
        }
    }
    updateLocalStorage('wishList', newState.wishList);
    return newState;
};


// export const totalAmountReducer = (state = initialTotalAmountState, action) => {
//     let newState;
//     switch (action.type) {
//         case "SET_TOTAL_AMOUNT": {
//             newState = {
//                 ...state,
//                 totalAmount: action.payload,
//             };
//             break;
//         }
//         default: {
//             newState = state;
//             break;
//         }
//     }
//     updateLocalStorage('totalAmount', newState.totalAmount);
//     return newState;
// };
