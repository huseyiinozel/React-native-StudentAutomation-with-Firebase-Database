import { StyleSheet,Dimensions } from "react-native";
import colors from "../../styles/colors";
export default StyleSheet.create({
    container:{
        
        backgroundColor:colors.darkgreen,
        borderColor:'#bdbdbd',
        borderWidth:1,
        margin:10,
        flexDirection:'column',
        borderRadius:10

    },
    name:{
        color:'black',
        fontWeight:'bold',
        fontSize:22,
        marginLeft:8


    },
    touch:{
        backgroundColor:'lavender',
        borderRadius:20,
        width:200,
        
        height:30,
        margin:5

    },
    text:{
        color:"black",
        textAlign:'center',
        marginTop:5
    }

    


})