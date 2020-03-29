import React,{Component}  from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity, 
} from 'react-native';

import { Field, reduxForm } from 'redux-form';
import {connect} from "react-redux";
import {compose} from "redux";

import {Actions} from 'react-native-router-flux';
import Logo from '../components/logo';
import InputText from '../components/InputText';
import {createNewUser} from "../actions/auth.actions";

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
        buttonText:{

            backgroundColor:"#D4AF37",
            height:50,
            width: 100,
            textAlign:"center",
            marginTop:10,
            paddingTop: 10,
            paddingBottom: 10,
            borderRadius: 15,
            fontSize:18
            
            


        },
        SignUpText:{

            color:"#D4AF37",
            fontSize:18


        },
        errorText:{

            color:"#D4AF37",
            fontSize:14,
            paddingHorizontal:16,
            marginTop: -7,
            marginBottom:10


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
   

class SignUp extends Component {
    goBack(){
        Actions.login();
    }
    
   createNewUser =(values)=>{
       this.props.dispatch(createNewUser(values))

   }

   renderTextInput = (field) => {

        const { meta: { touched, error}, label, secureTextEntry, maxLength, keyboardType, placeholder, input:{onChange,...restInput}} = field
        return(
            <View>
                <InputText 
                onChangeText={onChange}
                maxLength={maxLength}
                placeholder={placeholder}
                keyboardType= {keyboardType}
                secureTextEntry={secureTextEntry}
                label={label}
                {...restInput} 
                />
              {(touched && error) && <Text style={styles.errorText}>{error}</Text>}  
            </View>
        )

    }

    onSubmit = (values) => {
       
        this.createNewUser(values)


    }


    render(){
        const {handleSubmit} = this.props
     return (
   
        <View style= {styles.container}>
  
        <Logo/>
        
        { <Field
            name="name"
            placeholder="Enter name"
            //onSubmitEditing={()=> this.email.focus()}
            component={this.renderTextInput} 
        /> }
        { <Field
            name="email"
            placeholder="Enter email"
            keyboardType="email-address"
            //ref={ (input) => this.email = input}
            //onSubmitEditing={()=> this.password.focus()}
            component={this.renderTextInput}
        /> }
         { <Field
            name="password"
            placeholder="Enter password"
            secureTextEntry={true}
            component={this.renderTextInput}
            //ref={ (input) => this.password = input}
            /> }
        
        
        <TouchableOpacity onPress={handleSubmit(this.onSubmit)}>
              <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>



        <View style={styles.SignUpCont}>
        
            <Text style={styles.SignUpText}>Already have an account? </Text>
            <TouchableOpacity  onPress={this.goBack} style={styles.SignUpButtonOpacity}>
                <Text style={styles.SignUpButton}>SignIn</Text>
            </TouchableOpacity>
        
        </View>
       
        </View>
   
    );}
   
   }
 const validate = (values) => {
    const errors= {};
    if(!values.name) {
        errors.name= "Name is required"
    }
    if(!values.email) {
        errors.email= "emial is required"
    }
     if(!values.password) {
        errors.password= "Password is required"
    }
    return errors;
 }

 mapDispatchToProps = (dispatch) => ({

    dispatch
 })
 
 export default compose(
    connect(null,mapDispatchToProps),
    reduxForm({
        form: 'register',
        validate,
      })
     )(SignUp);
 
