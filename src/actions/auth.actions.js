import {fetchApi} from "../service/api";

export const createNewUser = (payload) => {

    return async(dispatch)=>{
        try {
            const response = await fetchApi("/user/create","POST",payload,200) ;
            console.log(response);
        } catch (error) {
            throw error;
        }
    }

}