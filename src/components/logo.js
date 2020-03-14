import React,{Component}  from 'react';
import {
  
  StyleSheet,
  
  View,
  Text,
  Image
} from 'react-native';


class Logo extends Component {

    render(){
     return (
   
      <View style= {styles.Lcontainer}>
    
   <Image style={{width: 110, height:130}} 
    source={ require('../Images/imi.jpg') }/>
    <Text style={styles.logoText}> Welcome To MEME </Text>
  
    </View>
  
  
    );}
   
   }

   const styles= StyleSheet.create({
    Lcontainer:{
   
      flexGrow:1,
      alignItems:"center",
      justifyContent:"flex-end"
      
     
      } ,
    logoText:{
     marginTop: 15,
     fontSize: 18,
     color: 'rgba(218,165,32,0.9)'

    }




   })
 
   
   export default Logo;