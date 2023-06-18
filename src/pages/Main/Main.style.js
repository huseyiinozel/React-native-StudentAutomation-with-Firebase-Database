import { StyleSheet,Dimensions } from "react-native";
import colors from "../../styles/colors";
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"lavender",
       

    },
    title:{
        fontWeight:"bold",
        fontSize:40,
        color:"black",
        margin:5,
        padding:5
    },
    button: {
        position: "absolute",
        top: 16,
        right: 16,
        backgroundColor: colors.darkgreen,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
      },
      buttonText: {
        fontSize: 22,
        color:"black"
      },
      input:{
        borderWidth:1,
        borderRadius:30,
        borderColor:"red",
        
      }
  

    


})