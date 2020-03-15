import React,{Component}  from 'react';
import {
  
  StyleSheet,
  
  View,
  Text,
  TextInput,
  TouchableOpacity
  
} from 'react-native';


export default class Form extends Component {

   
    render(){
     return (
   
        <View style= {styles.fcontainer}>
  
            <TextInput style={styles.Inputbox}  
                placeholder="Enter your email" 
                keyboardType="email-address" 
                placeholderTextColor="#D4AF37"
                onSubmitEditing={()=> this.password.focus()}
                
                
                />
            <TextInput style={styles.Inputbox}
                secureTextEntry={true} 
                placeholder="Enter password"
                placeholderTextColor="#D4AF37"
                ref={ (input) => this.password = input}
                />
            
            <TouchableOpacity>
     <Text style={styles.buttonText}>{this.props.type}</Text>
            </TouchableOpacity>
        </View>
   
    );}
   
   }
   const styles = StyleSheet.create({
    fcontainer:{
        alignItems:"center",
        justifyContent:"center",
        flexGrow:1,
        
       
        } ,
    Inputbox:{

        width:300,
        backgroundColor:'#ffffff',
        borderRadius: 25,
        paddingHorizontal: 16,
        marginTop: 20
       




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
            
            


        }
   });
   
