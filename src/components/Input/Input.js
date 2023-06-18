import React from "react";
import {View,TextInput} from 'react-native'
import styles from './Input.style'


const Input = ({placeholder,value,onType,val}) => {
    return (
        <View style={styles.contaier} >
            <TextInput  secureTextEntry={val} style={styles.input} value={value} onChangeText={onType} placeholder={placeholder} placeholderTextColor="black" />
            
        </View>
    )
}

export default Input;