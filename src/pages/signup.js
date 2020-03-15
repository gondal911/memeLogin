import React,{Component}  from 'react';
import {
  
  StyleSheet,
  
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Logo from '../components/logo';
import Form from '../components/form';

export default class SignUp extends Component {
    signIn(){

        Actions.login();

    }
   

    render(){
     return (
   
        <View style= {styles.container}>
  
        <Logo/>
        <Form type="signUp"/>
        <View style={styles.SignUpCont}>
            <Text style={styles.SignUpText}>Already have an account? </Text>
            <TouchableOpacity  onPress={this.signIn} style={styles.SignUpButtonOpacity}>
                <Text style={styles.SignUpButton}>SignIn</Text>

                </TouchableOpacity>
        </View>
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
       
        } ,
        SignUpCont:{

            alignItems:"center",
            justifyContent:"center",
            flexGrow:1,
            marginBottom:10,
            flexDirection:"row"
            

        },
        SignUpText:{

            color:"#D4AF37",
            fontSize:18


        },
        SignUpButton:{
            color:"#996515",
            fontSize:20,
            fontWeight:"500"



        },
        SignUpButtonOpacity:{
            color:"#996515",
            opacity:2,
        
        }
   });
   
 