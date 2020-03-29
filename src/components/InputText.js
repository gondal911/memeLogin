import React,{Component}  from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  
} from 'react-native';
import PropTypes from 'prop-types';

const propTypes = {

    mapElement: PropTypes.func,
    onSubmitEditing: PropTypes.func,
    onChangeText: PropTypes.func,
    value: PropTypes.string,
    placeholder:PropTypes.string,
    mxLength: PropTypes.number,
    keyboardType: PropTypes.string,
    secureTextEntry: PropTypes.bool,
    label: PropTypes.string,
};

const defaultProps = {

    mapElement: (n) => {},
    onSubmitEditing: () => {},
    onChangeText: () => {},
    value: "",
    placeholder:"",
    mxLength: 200,
    keyboardType: 'default',
    secureTextEntry: false,
    label: ""

};

const styles = StyleSheet.create({

    inputBox: {

        width:300,
        backgroundColor: 'rgba(255,255,255,1)',

        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color:'#D4AF37',
        marginVertical: 10
    }
});


class InputText extends Component {


    render(){

        const {placeholder, secureTextEntry, keyboardType, maxLength,value,onChangeText, onSubmitEditing} = this.props;
        return (

            <View>

            <TextInput
            
            style = {styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder={placeholder}
            placeholderTextColor="#D4AF37"
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            maxLength={maxLength}
            returnKeyType='done'
            value={value}
            onSubmitEditing={onSubmitEditing}
            onChangeText={onChangeText}
            />
            </View>
       );

    }

}

InputText.defaultProps = defaultProps;
InputText.propTypes= propTypes;

export default InputText;