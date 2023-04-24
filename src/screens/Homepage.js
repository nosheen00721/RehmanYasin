import { createDrawerNavigator } from '@react-navigation/drawer';
import Tc from './Tc';
import AboutUs from './AboutUs';
import About from './About';
import Faq from './Faq';
import book from './book';
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
    <NavigationContainer independent={true}     >
     

    <Drawer.Navigator>
      <Drawer.Screen  name="About Us" component={AboutUs}  />
      <Drawer.Screen  name="About" component={About}  />
      <Drawer.Screen name="Term & Conditions" component={Tc} />
      <Drawer.Screen name="FAQ" component={Faq} />
      <Drawer.Screen name="Online Boooking" component={book} />
      
      
    </Drawer.Navigator>
    
    </NavigationContainer>

  );
}

export default Homepage;



const styles = StyleSheet.create({
  container: {

     backgroundColor: '#F61111'
  }
})

