import { combineReducers} from 'redux';
const initialState = {
    user:null,
    isLoggedIn: false,
    isError: false,
    error: null,
    token: null
}

const createUser =  (state={}, action) => {


    return state; 
    
    
    }




export default combineReducers({

    createUser,
})