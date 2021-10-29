import {
    GET_BANNER,
    GET_CATEGORY,
    GET_PRODUCTS,
    LOAD_BANNER,
    LOAD_CATEGORY, LOAD_MORE, LOAD_MORE_PRODUCT,
    LOAD_PRODUCT,
} from "../configs/types";

const initState = {
    banner: [],
    category: [],
    products: [],
    loadBanner: false,
    loadCategory: false,
    loadProduct: false,
    loadMore: false
}

export default (state = initState, action = {}) => {
    switch (action.type) {
        case LOAD_BANNER: {
            return {
                ...state,
                loadBanner: true
            }
        }
        case LOAD_CATEGORY: {
            return {
                ...state,
                loadCategory: true
            }
        }
        case LOAD_PRODUCT: {
            return {
                ...state,
                loadProduct: true
            }
        }
        case LOAD_MORE: {
            return {
                ...state,
                loadMore: true
            }
        }
        case GET_BANNER: {
            return {
                ...state,
                loadBanner: false,
                banner: action.payload
            }
        }
        case GET_CATEGORY: {
            return {
                ...state,
                loadCategory: false,
                category: action.payload
            }
        }
        case GET_PRODUCTS: {
            return {
                ...state,
                loadProduct: false,
                products: action.payload
            }
        }
        case LOAD_MORE_PRODUCT: {
            return {
                ...state,
                products: state.products.concat(action.payload),
                loadMore: false
            }
        }
        default: return state
    }
}