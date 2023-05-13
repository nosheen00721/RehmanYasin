import { createDrawerNavigator } from '@react-navigation/drawer';
import Tc from './Tc';
import AboutUs from './AboutUs';
import About from './About';
import Faq from './Faq';
import book from './book';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet} from 'react-native'
const Drawer = createDrawerNavigator();
function Homepage({ navigation }) {
  return (
    <NavigationContainer independent={true}     >
     

    <Drawer.Navigator>
      <Drawer.Screen  name="Our Services" component={AboutUs}  />
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

