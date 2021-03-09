
import thunk from 'redux-thunk';
import {createStore,combineReducers,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
import ItemReducer from '../Reducers/ReducerItems/Index';


//for multi reducers
const rootReducer = combineReducers({
    item : ItemReducer 
    
  })

 export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,thunk)))

