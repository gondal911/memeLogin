import {fetchApi} from "../service/api";

export const createNewUser = (payload) => {

    return async(dispatch)=>{
       
            const response = await fetchApi("/user/create","POST",payload,200,null,true).then((result) => console.log(result)).catch((error) => console.log(error)) ;
            //console.log(response);
        
    }

}