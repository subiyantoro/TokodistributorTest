import toko from "./toko";
import {combineReducers} from "redux";

const reducers = {
    tokoStore: toko
}

const rootReducer = combineReducers(reducers)
export default rootReducer