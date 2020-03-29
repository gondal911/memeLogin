import { reducer as formReducer } from 'redux-form';
import { combineReducers} from 'redux';
 
import authReducer from './auth.reducer.js';

const reducers = {


    authReducer,
    form: formReducer,


 };
 export default combineReducers(reducers) ;