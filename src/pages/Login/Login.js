import React,{useState} from "react";
import { SafeAreaView,View,Text } from "react-native";
import { Formik } from 'formik';
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import styles from "./Login.style";
import auth from '@react-native-firebase/auth'
import { showMessage } from "react-native-flash-message";


// formik initial valuesleri burada tanimladim
const inialForm = {
    usermail:'',
    password:''
  }
  

function Login({navigation}) {
    // programin yuklenme durumunu kontrol etmek icin state tanımladım
    const [loading,setloading] =useState(false)


        // dogru bir sekilde giriş yapabilmek icin gereken fonksiyon
    async function handleformsubmit(formValues) {
        try {
          setloading(true)
          // firebase ye baglaniyor ve girdigimiz bilgileri gonderiyor dogru ise mainpageye yonlendiriyor
        await auth().signInWithEmailAndPassword(formValues.usermail,formValues.password)
        setloading(false)
        navigation.navigate("MainPage")
        }
        catch(error) {
        // show message ile hata gelirse yukaridan uyari cıkaracak
        showMessage({
            message:"Please enter your information correctly",
            type:"danger"
          })
        
        setloading(false)
        }
      }

    return (
        <SafeAreaView style={styles.container} >
                <Text style={styles.header} >Student  System</Text>
                
                <Formik initialValues={inialForm}  onSubmit={handleformsubmit} >
                {({values,handleChange,handleSubmit}) => (
                <>
            <Input value={values.usermail} onType={handleChange('usermail')} placeholder="Mail" val={false} ></Input>
            <Input  value={values.password}  onType={handleChange('password')}   placeholder="Password" val={true} ></Input>
            <Button text="Login" theme="primary" onPress={handleSubmit} ></Button>
            </>
                )}
            </Formik>
            
    
  </SafeAreaView>

    )
}


export default Login;