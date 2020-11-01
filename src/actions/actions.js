import { productsShoes } from '../assets/products-shoes';
import {ADD_TO_CART,INCREASE,DECREASE} from './actionsTypes';


export const addToCart = (product) => {
    return {
        type:ADD_TO_CART,
        payload:product,
    }
}

export const increase = (product) => {
    return {
        type:INCREASE,
        payload:product,
    }
}

export const decrease = (product) => {
    return {
        type:DECREASE,
        payload:product,
    }
}