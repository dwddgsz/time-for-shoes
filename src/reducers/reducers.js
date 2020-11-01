import {ADD_TO_CART,INCREASE,DECREASE} from '../actions/actionsTypes';
import {combineReducers} from 'redux';
import {productsShoes} from '../assets/products-shoes';
import {productsWatches} from '../assets/products-watches';


const initialState = {
    shoes:productsShoes,
    watches:productsWatches,
    totalValue:0,
    totalAmount:0,
}

const cartReducer = (state=initialState,action) => {
    return state;
}


export default combineReducers({
    cart: cartReducer,
})
