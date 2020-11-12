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
    switch(action.type){
        case ADD_TO_CART: {
            let products;
            if (action.payload.id > 6) {
                products = 'watches'
            }
            else {
                products = 'shoes'
            }
                return {...state,[products]:state[products].map(product=>{
                    if (product.id === action.payload.id) {
                        return {...product,inCart:true,amount:product.amount+1};
                    }
                    else {
                        return product
                    }
                }),
                totalAmount: state.totalAmount + 1,
                totalValue: state.totalValue + action.payload.value,}

        }
        case INCREASE: {
            let products;
            if (action.payload.id > 6) {
                products = 'watches'
            }
            else {
                products = 'shoes'
            }
                return {...state,[products]:state[products].map(product=>{
                    if (product.id === action.payload.id) {
                        return {...product,amount:product.amount+1};
                    }
                    else {
                        return product
                    }
                }),
                totalAmount: state.totalAmount + 1,
                totalValue: state.totalValue + action.payload.value,}
        }
        case DECREASE: {
            let products;
            if (action.payload.id > 6) {
                products = 'watches'
            }
            else {
                products = 'shoes'
            }
                return {...state,[products]:state[products].map(product=>{
                    if (product.id === action.payload.id) {
                        if (product.amount === 1) {
                            return {...product, amount: product.amount - 1,inCart:false}
                        } else {
                            return {...product, amount: product.amount - 1}
                        }
                    }
                    else {
                        return product
                    }
                }),
                totalAmount: state.totalAmount - 1,
                totalValue: state.totalValue - action.payload.value,}
            } 
        default: {
            return state
        }
    }
}


export default combineReducers({
    cart: cartReducer,
})

