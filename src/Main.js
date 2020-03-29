/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React,{Component}  from 'react';
import { 
  StyleSheet, 
  View,
  StatusBar,
  
} from 'react-native';

import Routes from './components/routes.js';
import {connect} from 'react-redux';

 class Main extends Component {
    
    render(){
     return (
   
   <View style= {styles.container}>
        <StatusBar 
            backgroundColor = "#1c313a"
            barStyle="light-content" 
        />
        <Routes/>        
    </View>       
    
    );}
   }
   const styles = StyleSheet.create({
    container:{

        flex:1
       
        } ,

   });

export default connect(null,null) (Main);
   
   