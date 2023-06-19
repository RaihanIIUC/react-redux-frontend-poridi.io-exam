import { createStore ,applyMiddleware } from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";
import mainReducer from './reducer/index';
import thunk from "redux-thunk";
// export const store = createStore(myReducer, composeWithDevTools());

const conosleEnhancher = composeWithDevTools(applyMiddleware(thunk));

 export const store = createStore(mainReducer, conosleEnhancher);