// combine all the reducer here and then send to store 

import { combineReducers } from "redux";
import { cartReducer , wishReducer  } from "./reducer";

const rootreducer = combineReducers({
    cartReducer,
    wishReducer,
    // totalAmountReducer
})


export default rootreducer;