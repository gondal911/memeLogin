/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component}  from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Login from './src/pages/login';
import SignUp from './src/pages/signup';

class App extends Component {

 render(){
  return (

<View style= {styles.container}>
<StatusBar backgroundColor = "#1c313a"
           barStyle="light-content" 
/>
<SignUp/>

</View>
  );}

}
  
const styles = StyleSheet.create({
 container:{

  backgroundColor: "#FAFAD2",
 //flexDirection: "column",
 alignItems:"center",
 justifyContent:"center",
 flex:1

 } 
});

export default App;
