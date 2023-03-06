import {View, Text, Image, StyleSheet, TouchableOpacity ,Button} from 'react-native';
import React from 'react';
import logo from '../../assets/hlog.png';
import ms from '../../assets/ms.png';
import Touch from './Touch';

export default function AboutUs() {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.logo} source={logo} />
      </View>
      <View style={styles.body}>
      <Text style={styles.h1}>Our Services</Text>
       <Touch/>
      </View>
      <View style={styles.footer}>
        <View >
        <Text style={styles.f1}>Want to talk?</Text>
        <Text style={styles.f1}>Call : +92 0000000000</Text>
        <Text style={styles.f1}>Email: suzukicanal5@gmail.com</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
      width: '100%',
      height: '100%',
      
      backgroundColor:'white',
      
  },
  body:{
    flex:1,
    
    
    // justifyContent:'center',
    // alignContent:'center'
  },
  footer:{
    backgroundColor:'#4c5dab',
    height:90
  },
  f1:{
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
    marginTop: 2,

  },
  logo:{
    marginTop:10,
    marginLeft:45
  },
  h1: {
    marginTop:4,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color:'black',
   
}, 
 p1 :{

  
    width:101,
    height:95,
   

 },
 
})
