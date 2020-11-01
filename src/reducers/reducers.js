import {ADD_TO_CART,INCREASE,DECREASE} from '../actions/actionsTypes';
import {combineReducers} from 'redux';


const cartReducer = (state=[],action) => {
    return 'example';
}


export default combineReducers({
    cart: cartReducer,
})
