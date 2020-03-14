import React,{Component}  from 'react';
import { Router, Stack , Scene} from 'react-native-router-flux';

import Login from './pages/login.js';
import signUp from './pages/signup.js';

class routes extends Component {

render(){

return(
    <Router>
        <Stack>
            <Scene key='myLogin' component= { Login } title='login'/>
            <Scene key='register' component= {signUp} title='signup'/>
            
        </Stack>
    </Router>



)
}





}

export default routes;