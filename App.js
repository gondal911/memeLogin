
import React,{Component}  from 'react';


import {Provider} from 'react-redux';
import Persis from './src/config/store';
import Main from './src/Main'
import { PersistGate } from 'redux-persist/integration/react';

const persistStore= Persis();

class App extends Component {

 render(){
  return (
    <Provider store ={persistStore.store}>
      <PersistGate loading={null} persistor={persistStore.persistor}>
        < Main/>
      </PersistGate>
    </Provider>
  );}

}


export default App;
