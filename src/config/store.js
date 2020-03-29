
import {AsyncStorage} from 'react-native';
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers/index';
import { persistStore, persistReducer } from 'redux-persist';




const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whiteList: ["authReducer"]
  }
  
const persistedReducer = persistReducer(persistConfig, reducers)

const persis = () => {
    let store = createStore(persistedReducer,{},applyMiddleware(thunk));
    let persistor = persistStore(store)
    return { store, persistor }
  }
 export default persis;