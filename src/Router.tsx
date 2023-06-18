import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import FlashMessage from "react-native-flash-message";
import auth from '@react-native-firebase/auth'
import AddStudent from "./pages/AddStudent/AddStudent";
import Detail from "./pages/Detail/Detail";

const Stack = createStackNavigator();


export default () => {
  // kullanicinin oturum bilgilerini saklamak için state tanımladım
  const [userSesion,setUserSession] = React.useState();

  // useeffect ile kullanıcının oturum bilgisi değerini aldım ve true ya da false diye usersessiona attım
  React.useEffect(() => {
    auth().onAuthStateChanged(user=>{
      setUserSession(!!user);
    })

  },[])

  const AuthStack = () => {
    return (
      <Stack.Navigator   screenOptions={{headerShown:false}}>
      <Stack.Screen name ="LoginPage" component={Login} />
      
    </Stack.Navigator>
    )
  }

  const LogStack = () => {
    return (
      <Stack.Navigator   screenOptions={{headerShown:false}}>
      <Stack.Screen name ="MainPage" component={Main} />
      <Stack.Screen name ="AddStudentPage" component={AddStudent} />
      <Stack.Screen name ="DetailPage" component={Detail} />
      
    </Stack.Navigator>
    )
  }



  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          // eğer oturum açmamışsa authstack açmışsa logstack çalışacak
          !userSesion ? (
        
      <Stack.Screen name ="AuthStack" component={AuthStack}  options={{headerShown:false}}/>
          ) : (
      <Stack.Screen name ="LogStack" component={LogStack}  options={{headerShown:false}}    />
      
          )}
      </Stack.Navigator>
      <FlashMessage position="top" ></FlashMessage>
    </NavigationContainer>



  )
}