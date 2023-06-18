import React,{useState} from 'react';
import { SafeAreaView,Text,ScrollView} from 'react-native';
import styles from "./AddStudent.style"
import { showMessage } from "react-native-flash-message";
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import firestore from '@react-native-firebase/firestore';




function AddStudent ({navigation}) {

  // formik yapısı veri çekerken dizilerde hata verdiği için standart stateleri tanımladım veriler için
  const [bir,setBir] = useState(null)
  const [iki,setIki] = useState(null)
  const [uc,setUc] = useState(null)
  const [dort,setDort] = useState(null)
  const [bes,setBes] = useState(null)
  const [alti,setAlti] = useState(null)
  const [yedi,setYedi] = useState(null)
  const [sekiz,setSekiz] = useState(null)
  const [dokuz,setDokuz] = useState(null)


  // tüm verileri bir araya ve tek değişkene topladım
  const inialForm = {
    name: bir,
    surname: iki,
    number: uc,
    courses: {
      '0': {
        name: dort,
        note: bes,
      },
      '1': {
        name: alti,
        note: yedi,
      },
      '2': {
        name: sekiz,
        note: dokuz,
      },
    },
  };


  // kaydet butonuna basinca veriler databaseye yaziliyor eğer bir yer boş ise hata verecek
  async function handleformsubmit() {
    try {
      // eger bir deger bos ise hata verecek
      if (
        !bir ||
        !iki ||
        !uc ||
        !dort ||
        !bes ||
        !alti ||
        !yedi ||
        !sekiz ||
        !dokuz
      ) {
        showMessage({
          message: 'Filling in all the blanks',
          type: 'danger',
        });
        return;

      }
      const docRef = await firestore().collection('Students').add(inialForm);
      const docId = docRef.id; 
  
      navigation.navigate('MainPage', docId);      
    } catch(error) {
      // show message ile hata gelirse yukarıdan uyarı çıkaracak
      showMessage({
          message:"Please enter your all information correctly",
          type:"danger"
        })
      
      setloading(false)
      }
  }
  

    return (
      
        <SafeAreaView style={styles.container} >
          <ScrollView>
                <Text style={styles.header} >Add Student</Text>
                
                
                <Input  onType={setBir} placeholder="Name" val={false} ></Input>
                <Input   onType={setIki}   placeholder="Surname" val={false} ></Input>
                <Input   onType={setUc}   placeholder="ID" val={false} ></Input>

                <Input  onType={setDort} placeholder="Course1" name="courses[0].name" val={false} />
                <Input    onType={setBes}   placeholder="Note" val={false} ></Input>

                <Input    onType={setAlti}   placeholder="Course2" val={false} ></Input>
                <Input    onType={setYedi}   placeholder="Note" val={false} ></Input>

                <Input    onType={setSekiz}   placeholder="Course3" val={false} ></Input>
                <Input    onType={setDokuz}   placeholder="Note" val={false} ></Input>

                <Button text="Add" theme="primary" onPress={handleformsubmit} ></Button>
                </ScrollView>
  </SafeAreaView>
  

    )
}

export default AddStudent;







   /*
    // formik yapısı için valueler
    const inialForm = {
        name:'',
        surname:'',
        id:"",
        courses: [
          {
            name: "",
            note: ""
          }
        ]
        }
    
      
        // butona basınca çalışacak fonkstiyon verileri veritabanına gönderip push ediyor
       async function handleformsubmit (formValues) {
            try {
                
              const contentobj = {
                name: formValues.name,
                surname: formValues.surname,
                id: formValues.id,
                courses: [
                  {
                    name: "",
                    note: ""
                  }
                ]
              };
                  database().ref("students").push(contentobj)  
                 navigation.navigate("MainPage")
              }
              catch(error) {
                console.log(error)
            
                }
              
             
              }
            
          
*/