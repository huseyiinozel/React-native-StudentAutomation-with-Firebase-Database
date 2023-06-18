import { StyleSheet,Platform } from "react-native"
export default StyleSheet.create ({
    contaier:{
        padding:3,
        margin :10,
        backgroundColor: '#e0e0e0',
        borderRadius:5,
        flexDirection:'row'
    },
    input:{
        flex:1,
        padding:Platform.OS === 'android' ? 0 : 5,
    }
})