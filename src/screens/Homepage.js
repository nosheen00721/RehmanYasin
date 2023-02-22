import { createDrawerNavigator } from '@react-navigation/drawer';
import Tc from './Tc';
import AboutUs from './AboutUs';
import Faq from './Faq';
import { NavigationContainer } from '@react-navigation/native';
import login from './Login';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { button1 } from '../common/button';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
  } from '@react-navigation/drawer';
import { StyleSheet, Text, View ,Button ,TouchableOpacity } from 'react-native'

// function CustomDrawerContent( {navigation}) {
//     return (
//         <View style={{flex:1}}>
//          <Button
//       title="LogOut"
//       onPress={() => {navigation.navigate('login')}
//     }
//     />
//         </View>
        
    
    
//     );
//   }
const Drawer = createDrawerNavigator();


function Homepage({ navigation }) {
  return (
    <NavigationContainer independent={true}>
    
    <Drawer.Navigator>
      <Drawer.Screen name="About Us" component={AboutUs} />
      <Drawer.Screen name="Term & Conditions" component={Tc} />
      <Drawer.Screen name="FAQ" component={Faq} />
      
      
      
    </Drawer.Navigator>
    </NavigationContainer>

  );
}

export default Homepage;

// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { head1 } from '../common/formcss'
// import { button1 } from '../common/button'

// const Homepage = ({ navigation }) => {
//     return (
//         <View style={styles.container}>
//             <Text
//                 style={head1}
//             >this is Homepage</Text>

//             <Text style={button1}
//                 onPress={
//                     () => { navigation.navigate('login') }
//                 }
//             >Logout</Text>
//         </View>
//     )
// }

// export default Homepage;
// const styles = StyleSheet.create({
//   container: {
//       width: '100%',
//       height: '100%',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//   }
// })

