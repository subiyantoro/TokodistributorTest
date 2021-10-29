import {
    GET_BANNER,
    GET_CATEGORY,
    GET_PRODUCTS,
    LOAD_BANNER,
    LOAD_CATEGORY, LOAD_MORE, LOAD_MORE_PRODUCT,
    LOAD_PRODUCT,
    LOADING
} from "../configs/types";
import axios from "axios";
import {BASE_URL} from "../configs/utils";
import {store} from "../configs/store";

export const getBanner = () => {
    return async (dispatch) => {
        dispatch({
            type: LOAD_BANNER
        })
        axios.get(BASE_URL + '/utility/home/banner-web')
            .then((res) => {
                dispatch({
                    type: GET_BANNER,
                    payload: res.data.data
                })
            })
            .catch((e) => {
                console.log(e)
            })
    }
}

export const getCategory = () => {
    return async (dispatch) => {
        dispatch({
            type: LOAD_CATEGORY
        })
        axios.get(BASE_URL + '/utility/home/box-category?with_staple=true')
            .then((res) => {
                dispatch({
                    type: GET_CATEGORY,
                    payload: res.data.data
                })
            })
            .catch((e) => {
                console.log(e)
            })
    }
}

export const getProducts = (page) => {
    return async (dispatch) => {
        dispatch({
            type: LOAD_PRODUCT
        })
        axios.get(BASE_URL + '/product-recommendation?page=' + page)
            .then((res) => {
                dispatch({
                    type: GET_PRODUCTS,
                    payload: res.data.data
                })
            })
            .catch((e) => {
                console.log(e)
            })
    }
}

export const loadMoreProduct = (page) => {
    console.log(page)
    return async (dispatch) => {
        dispatch({
            type: LOAD_MORE,
        })
        axios.get(BASE_URL + '/product-recommendation?page=' + page)
            .then((res) => {
                dispatch({
                    type: LOAD_MORE_PRODUCT,
                    payload: res.data.data
                })
            })
            .catch((e) => console.log(e))
    }
}