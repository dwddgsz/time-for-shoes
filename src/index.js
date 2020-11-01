import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'; 
import {Provider} from 'react-redux';
import rootReducer from './reducers/reducers';
import App from './App';


const loadState = () => {
    try{
        const serializedState = localStorage.getItem('persistedState');
        if (serializedState === null) {
            return undefined
        } else {
            return JSON.parse(serializedState);
        }
    }
    catch(error) {
        return undefined
    }
}

const saveState = (state) => {
try {
    localStorage.setItem('persistedState',JSON.stringify(state));
}
catch(error) {
    
}
}

const persistedState = loadState();
const store = createStore(
    rootReducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(()=>{
    saveState(store.getState());
})



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)