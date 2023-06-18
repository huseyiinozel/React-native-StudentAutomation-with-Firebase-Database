import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList, TextInput,ScrollView } from "react-native";
import styles from "./Main.style";
import StudentCard from "../../components/StudentCard/StudentCard";
import Button from "../../components/Button/Button";
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';

function Main({ navigation, route }) {
  // ekleme sayfasina yonlendirmek icin
  function addst() {
    navigation.navigate("AddStudentPage");
  }

  // ekledikten sonra gelen doc idyi almak icin yedekde dursun bu veride diye
  const docId = route.params;
// veritabanından cektigim veriler icin bir state ve arama yapmak icin bir state tanimladim
  const [contentlist, setContentlist] = useState([]);
  const [searchText, setSearchText] = useState("");

  // useeffect ile sayfa acilinca direkt verileri cekiyorum ayrica ek olarak doc idleride cekiyorum guncelleme ve silme islemleri icin
  useEffect(() => {
    const unsubscribe = firestore()
      .collection('Students')
      .onSnapshot(querySnapshot => {
        const dataArray = [];
        querySnapshot.forEach(documentSnapshot => {
          const data = documentSnapshot.data();
          const docId = documentSnapshot.id; 
          const item = { ...data, docId }; 
          dataArray.push(item);
        });
        setContentlist(dataArray);
      });
    return () => unsubscribe();
  }, []);

  // detail sayfasina yonlendirme
  function goDetail(info) {
    navigation.navigate("DetailPage", { info: info, docId: docId });
  }

  // arama fonksiyonu
  function handleSearch(text) {
    setSearchText(text);
    if (text === "") {
      // Eğer arama metni boşsa, orijinal listeyi kullan
      const unsubscribe = firestore()
        .collection('Students')
        .onSnapshot(querySnapshot => {
          const dataArray = [];
          querySnapshot.forEach(documentSnapshot => {
            const data = documentSnapshot.data();
            const docId = documentSnapshot.id; 
            const item = { ...data, docId }; 
            dataArray.push(item);
          });
          setContentlist(dataArray);
        });
      return () => unsubscribe();
    } else {
      // Arama islemi icin
      const filteredList = contentlist.filter(item =>
        item.name.toLowerCase().includes(text.toLowerCase())
      );
      setContentlist(filteredList);
    }
  }
// flatlist render
  const renderContent = ({ item }) => (
    <StudentCard info={item} onPress={() => goDetail(item)} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>STUDENT LİST</Text>
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor="black"
        value={searchText}
        onChangeText={handleSearch}
      />
      <TouchableOpacity style={styles.button} onPress={() => auth().signOut()}>
        <Text style={styles.buttonText}>LogOut</Text>
      </TouchableOpacity>
      <Button text="ADD NEW STUDENT" onPress={addst} />
      <FlatList
        data={contentlist}
        keyExtractor={(item) => item.docId}
        renderItem={renderContent}
      />
    </View>
  );
}

export default Main;






