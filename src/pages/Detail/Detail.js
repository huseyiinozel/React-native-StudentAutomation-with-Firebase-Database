import React,{useState} from 'react';
import { SafeAreaView,Text,FlatList,TextInput,View,ScrollView } from 'react-native';
import styles from "./Detail.style"
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import firestore from '@react-native-firebase/firestore';
import { showMessage } from "react-native-flash-message";
 
function Detail ({route,navigation}) {
  //  mainpage sayfasindan gelen info ve doc id bilgilerini aliyorum burada
  const {info} = route.params;
  
  

// degisiklikleri yakalarken formik yapısı yerine standart stateleri tanimliyorum
  const [bir,setBir] = useState("")
  const [iki,setIki] = useState("")
  const [uc,setUc] = useState("")
  const [dort,setDort] = useState("")
  const [bes,setBes] = useState("")
  const [alti,setAlti] = useState("")
  const [yedi,setYedi] = useState("")
  const [sekiz,setSekiz] = useState("")
  const [dokuz,setDokuz] = useState("")


// güncelleme yapılırken eger bos bir yer bıraklırsa eski degerini koruyacak sekilde verileri yeniden tanimliyorum
  const inialForm = {
    name: bir || info.name,
    surname: iki || info.surname,
    id: uc || info.number,
    courses: {
      '0': {
        name: dort || info.courses[0].name,
        note: bes || info.courses[0].note,
      },
      '1': {
        name: alti || info.courses[1].name,
        note: yedi || info.courses[1].note,
      },
      '2': {
        name: sekiz || info.courses[2].name,
        note: dokuz || info.courses[2].note,
      },
    },
  };

// update fonksiyonu hata varsa ve yoksa iki farkli uyari veriyor
  async function UpdateInfo() {
    
  
    try {
      await firestore().collection('Students').doc(info.docId).update(inialForm);
      {
        showMessage({
          message: 'Updated',
          type: 'success',
        });
        return;

      }
    } catch (error) {
      {
        showMessage({
          message: error,
          type: 'danger',
        });
        return;

      }
      
    }
  }

  // silme fonksiyonu en sonunda ana sayfaya yonlendiriyor
async function deleteInfo () {
  firestore()
  .collection('Students')
  .doc(info.docId)
  .delete()
  .then(() => {
    
      showMessage({
        message: "Deleted",
        type: 'success',
      });

    navigation.navigate("MainPage")
    
  });
}
    return (
 
      <ScrollView>
        <SafeAreaView style={styles.container} >  
          <Text style={styles.header}> STUDENT INFO</Text>
         
       <View style={styles.info} >
       
           <Text style={styles.text} >Name</Text>
                <Input   placeholder={info.name} onType={setBir} ></Input>
                <Text style={styles.text} >Surname</Text>
                <Input   placeholder={info.surname} onType={setIki} ></Input>
                <Text style={styles.text} >Id</Text>
                <Input   placeholder={info.number} onType={setUc} ></Input>
                <Text style={styles.text} >Course 1</Text>
                <Input   placeholder={info.courses[0].name} onType={setDort} ></Input>
                <Input   placeholder={info.courses[0].note} onType={setBes} ></Input>
                <Text style={styles.text} >Course 2</Text>
                <Input   placeholder={info.courses[1].name} onType={setAlti} ></Input>
                <Input   placeholder={info.courses[1].note} onType={setYedi} ></Input>
                <Text style={styles.text} >Course 3</Text>
                <Input   placeholder={info.courses[2].name} onType={setSekiz} ></Input>
                <Input   placeholder={info.courses[2].note} onType={setDokuz} ></Input>
                <Button text="Update"  onPress={UpdateInfo} ></Button>
                <Button text="Delete"  onPress={deleteInfo} ></Button>
                </View>
 
  </SafeAreaView>
  </ScrollView>
    )
}

export default Detail;