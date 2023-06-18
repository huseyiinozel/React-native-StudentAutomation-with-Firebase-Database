import React from "react";
import {View,Text,TouchableWithoutFeedback,TouchableOpacity} from 'react-native';
import styles from "./StudentCard.style";

function StudentCard ({info,onPress}) {
    return(
        <TouchableWithoutFeedback onPress={onPress}  >
        <View style={styles.container}>
            
        <Text style={styles.name} >{info.name} {info.surname}</Text>
       
            <TouchableOpacity disabled={true} style={styles.touch}  >
            <Text style={styles.text}  >{info.number}</Text>
            </TouchableOpacity >
            
        </View>
        </TouchableWithoutFeedback>

    )
}

export default  StudentCard;