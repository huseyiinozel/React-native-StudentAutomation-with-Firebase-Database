import { StyleSheet } from "react-native"
import colors from "../../styles/colors"
const base_style = StyleSheet.create ({
    container:{
        padding:8,
        margin :10,
        
        borderRadius:20,
        alignItems:'center'

    },
    title:{
        fontWeight:'bold',
        fontSize:17,
        
    }
})


export default {
    primary: StyleSheet.create ({
        ...base_style,
        container:{
           ...base_style.container,
            backgroundColor: colors.darkgreen,
            
    
        },
        title:{
            ...base_style.title,
            color:'black'
        }
    }),
    secondary: StyleSheet.create ({
        ...base_style,
        container:{
            ...base_style.container,
            backgroundColor: 'white',
            borderColor: colors.darkgreen ,
            borderWidth:1,
            
    
        },
        title:{
            ...base_style.title,
            color:colors.darkgreen
        }
    })

    
}