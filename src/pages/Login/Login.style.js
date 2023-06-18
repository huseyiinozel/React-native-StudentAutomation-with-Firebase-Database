import { StyleSheet,Platform } from "react-native"
import colors from "../../styles/colors"
export default StyleSheet.create ({
    container:{
        backgroundColor:'white',
        flex:1
    },
    header:{
        color:colors.darkgreen,
        fontSize:Platform.OS === 'android' ? 90:100
    }
   
})