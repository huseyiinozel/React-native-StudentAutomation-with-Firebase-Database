import { StyleSheet,Dimensions } from "react-native";
import colors from "../../styles/colors";
export default StyleSheet.create({
   
    container: {
        flex: 1,
        backgroundColor:"white"
       
      },
      header:{
        fontWeight:"bold",
        fontSize:40,
        color:"red",
        margin:5,
        padding:5
      },
      text:{
        fontSize:20,
        fontWeight:'bold',
        color:'black',
        
        

      },
      info:{
        backgroundColor:'gold',
        borderColor:'#bdbdbd',
        borderWidth:1,
        margin:10,
        flexDirection:'column',
        borderRadius:10   
        

      }

})