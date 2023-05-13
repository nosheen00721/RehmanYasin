
import React, { useState } from 'react';
import { View, TouchableOpacity, Text , StyleSheet ,Image} from 'react-native';
import ms from '../../assets/ms.png';
import Book from './book';
const Touch = () => {
  const [showNewComponent, setShowNewComponent] = useState(false);
  function handlePress() {
    setShowNewComponent(true);
  }
  return (
    <View>
    <View style={{ flexDirection: 'row' , alignContent:'space-around' , marginTop:20 }}>
      <TouchableOpacity style={{ marginRight: 15 ,marginLeft:20  }}>
        <Image style={styles.p1} source={ms} />
        <Text>Mechanic Shop</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image style={styles.p1} source={ms} />
        <Text>Salling Information</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image style={styles.p1} source={ms} />
        <Text>Paint Shop</Text>
        </TouchableOpacity>
        
    </View>
    <View style={{ flexDirection: 'row' , marginTop:20}}>
    <TouchableOpacity   style={{ marginRight: 30 ,marginLeft:70  }}>
        <Image style={styles.p1} source={ms} />
        <Text>Car Asseoriess</Text>
        </TouchableOpacity>
        <View>

        <TouchableOpacity   style={{ marginRight: 20   }}  onPress={handlePress}>
        <Image style={styles.p1} source={ms} />
        <Text>Online Booking</Text>
        </TouchableOpacity>
        {showNewComponent && <Book/>}
        </View>
    </View>
    </View>
     
  );
}

export default Touch;
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
      backgroundColor:'#F61111',
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
  