import { combineReducers } from "redux";
import ClientReducer from "./ClientReducer";
 import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
    

const persistConfig = {
  key: "root",
  storage: storage,
};
    
const persistedClientInfo = persistReducer(persistConfig, ClientReducer);
 
const mainReducer = combineReducers({
  clientStore: persistedClientInfo,
   });
 


export default mainReducer;