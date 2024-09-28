import { createStore } from "redux";
import rootreducer from "./redux/reducers/main"

const Store = createStore(
    rootreducer
)


export default Store