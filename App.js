import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import MyButton from './components/myButton.js';

export default function App() {
  const [searchInput, setInput] = useState('')
  const [color, setColor] = useState('red')
  return (
    <View style={styles.container}>
      <Image 
      source = {{uri:'https://www.google.co.th/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'}}
      style={styles.logo}
      />
      <Text 
      style={styles.title}>Google</Text>
      <TextInput 
      value={searchInput}
      onChangeText ={(text)=>{ setInput(text)}}
      style={styles.searchInput} 
      placeholder="ค้นหา"
      ></TextInput>
      <Text style={{fontSize: 18, marginTop: 20, color: color}}>{searchInput}</Text>
      <View style={styles.buttonLayout}>
        <MyButton title = 'red' color='red' onChangeColor={(color) => {setColor(color)}} />
        <MyButton title = 'blue' color='blue' onChangeColor={(color) => {setColor(color)}} />
        <MyButton title = 'green' color='green' onChangeColor={(color) => {setColor(color)}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },logo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
  },title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'gray',
    marginTop: 20,
  },searchInput:{
    height: 45,
    width: '70%',
    borderColor: 'gray',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 25,
    marginTop: 10,
    paddingLeft: 20,
    shadowColor: "#000",
  },buttonLayout: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  }
});
