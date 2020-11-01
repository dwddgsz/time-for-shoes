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
            if (action.payload.id > 6) {
                return {...state,watches:state.watches.map(watch=>{
                    if (watch.id === action.payload.id) {
                        return {...watch,inCart:true,amount:watch.amount+1};
                    }
                    else {
                        return watch
                    }
                }),
                totalAmount: state.totalAmount + 1,
                totalValue: state.totalValue + action.payload.value,}
            } else {
                return {
                    ...state,
                    shoes:state.shoes.map(shoe=>{
                    if (shoe.id === action.payload.id) {
                        return {...shoe,inCart:true,amount:shoe.amount+1};
                    } else {
                        return shoe
                    }
                    }),
                    totalAmount: state.totalAmount + 1,
                    totalValue: state.totalValue + action.payload.value,
                    
            }
            }
        }
        case INCREASE: {
            if (action.payload.id > 6) {
                return {...state,watches:state.watches.map(watch=>{
                    if (watch.id === action.payload.id) {
                        return {...watch,amount:watch.amount+1};
                    }
                    else {
                        return watch
                    }
                }),
                totalAmount: state.totalAmount + 1,
                totalValue: state.totalValue + action.payload.value,}
            } else {
                return {
                    ...state,
                    shoes:state.shoes.map(shoe=>{
                    if (shoe.id === action.payload.id) {
                        return {...shoe,amount:shoe.amount+1};
                    } else {
                        return shoe
                    }
                    }),
                    totalAmount: state.totalAmount + 1,
                    totalValue: state.totalValue + action.payload.value,
                    
            }
            }
        }
        case DECREASE: {
            if (action.payload.id > 6) {
                return {...state,watches:state.watches.map(watch=>{
                    if (watch.id === action.payload.id) {
                        if (watch.amount === 1) {
                            return {...watch, amount: watch.amount - 1,inCart:false}
                        } else {
                            return {...watch, amount: watch.amount - 1}
                        }
                    }
                    else {
                        return watch
                    }
                }),
                totalAmount: state.totalAmount - 1,
                totalValue: state.totalValue - action.payload.value,}
            } else {
                return {
                    ...state,
                    shoes:state.shoes.map(shoe=>{
                        if (shoe.id === action.payload.id) {
                            if (shoe.amount === 1) {
                                return {...shoe, amount: shoe.amount - 1,inCart:false}
                            } else {
                                return {...shoe, amount: shoe.amount - 1}
                            }
                        }
                        else {
                            return shoe
                        }
                    }),
                    totalAmount: state.totalAmount - 1,
                    totalValue: state.totalValue - action.payload.value,
                    
            }
            }
        }
        default: {
            return state
        }
    }
}


export default combineReducers({
    cart: cartReducer,
})
