import React,{Component}  from 'react';
import{View,StyleSheet} from 'react-native';
import { Router, Stack , Scene} from 'react-native-router-flux';

import Login from '../pages/login.js';
import Register from '../pages/signup.js';

class routes extends Component {

render(){

return(
    <View style={{flex:1}}>
    
        <Router >
            <Stack key="root"  hideNavBar={true} >
                <Scene key="login" component={Login} title="Login" />
                <Scene key="register" component={Register} title="Register" initial={true} />
    
            </Stack>
         </Router>
            
     
    </View>

)
}



}

export default routes;