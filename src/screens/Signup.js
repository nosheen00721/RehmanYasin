import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import pattern from '../../assets/pattern.png';
import logo from '../../assets/mainlogo.png';
import {button1} from '../common/button';

import CheckBox from '@react-native-community/checkbox';
import {
  errormessage,
  formgroup,
  head1,
  head2,
  input,
  input1,
  label,
  link,
  link2,
} from '../common/formcss';
import {SelectList} from 'react-native-dropdown-select-list';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MaskedTextInput} from 'react-native-mask-text';
import {Axios} from 'axios';
const Stack = createNativeStackNavigator();

const Signup = ({navigation}) => {
  // const [check, setCheck] = React.useState(false);
  const [fdata, setFdata] = useState({
    name: '',
    email: '',
    password: '',
    cpassword: '',
    dob: '',
    brand:'',
    color:'',
productT:'',
power:'',
saleP:'',
federalT:'',
federalTA:'',
whT:'',
whTA:'',
sedT:'',
sedTA:'',
comm:'',
commA:'',
ffiA:'',
pdiA:'',
description:'',
address: '',
// cng:check.valueOf(setCheck)
});

const [errormsg, setErrormsg] = useState(null);


const Sendtobackend = () => {
    console.log('Pressed');
    console.log(fdata);

    if (
      fdata.name == '' ||
      fdata.email == '' ||
      fdata.password == '' ||
      fdata.cpassword == '' ||
      fdata.dob == '' ||
      fdata.address == '' ||
      fdata.brand=='' ||
      fdata.color=='' ||
    fdata.productT=='' ||
    fdata.power=='' ||
    fdata.saleP=='' ||
    fdata.federalT=='' ||
    fdata.federalTA=='' ||
    fdata.whT=='' ||
    fdata.whTA=='' ||
    fdata.sedT=='' ||
    fdata.sedTA=='' ||
    fdata.comm=='' ||
    fdata.commA=='' ||
    fdata.ffiA=='' ||
    fdata.pdiA=='' ||
    fdata.description==''
    // fdata.cng=='' 
    //   fdata.enterVeh==''
    ) {
      setErrormsg('All fields are required');
      return;
    } else {
      if (fdata.password != fdata.cpassword) {
        setErrormsg('Password and Confirm Password must be same');
        return;
      } else {
        //    http://9b01-39-42-161-51.in.ngrok.io/verify
        fetch(`https://bdc8-39-42-177-36.eu.ngrok.io/verify`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(fdata),
        })
          .then(res => res.json())
          .then(data => {
            // console.log(data);
            if (data.error === 'Invalid Credentials') {
              // alert('Invalid Credentials')
              setErrormsg('Invalid Credentials');
            } else if (
              data.message === 'Verification Code Sent to your Email'
            ) {
              // console.log(data.udata);
              alert(data.message);
              navigation.navigate('verification', {userdata: data.udata});
            }
          })
          .catch(error => {
             //Handle any errors that occur
            console.error(error);
          });
      }
    }
  };
  //                     method: 'POST',
  //                     headers: {
  //                         'Content-Type': 'application/json',

  //                     },
  //                     body: JSON.stringify(fdata)
  //                 })
  //                     .then(res => res.json()).then(
  //                         data => {
  //                             // console.log(data);
  //                             if (data.error === 'Invalid Credentials') {
  //                                 // alert('Invalid Credentials')
  //                                 setErrormsg('Invalid Credentials')
  //                                 navigation.navigate('cars', { userdata: data.udata })
  //                             }
  //                         }
  //                     )
  //                     .catch((error) => {
  //                         //                  Handle any errors that occur
  //                                              console.error(error);
  //                                         });
  //                                     }
  //                     //         else if (data.message === "Verification Code Sent to your Email") {
  //                     //             // console.log(data.udata);
  //                     //             alert(data.message);
  //                     //             navigation.navigate('verification', { userdata: data.udata })
  //                     //         }
  //                     //     }
  //                     // )

  //     }

  // }
  const [maskedValue, setMaskedValue] = useState('');
  const [unMaskedValue, setUnmaskedValue] = useState('');

  return (
    <View style={styles.container}>
      <Image style={styles.patternbg} source={pattern} />

      <View style={styles.container1}>
        <View style={styles.s1}></View>
        <ScrollView style={styles.s2}>
          <Text style={head1}>Create a New Account</Text>
          <Text style={link2}>
            Already Registered?&nbsp;
            <Text style={link} onPress={() => navigation.navigate('login')}>
              Login here
            </Text>
          </Text>
          {errormsg ? <Text style={errormessage}>{errormsg}</Text> : null}
          <View style={formgroup}>
            <Text style={label}>Name</Text>
            <TextInput
              style={input}
              placeholder="Enter your Name"
              onPressIn={() => setErrormsg(null)}
              onChangeText={text => setFdata({...fdata, name: text})}
            />
          </View>
          <View style={formgroup}>
            <Text style={label}>Email</Text>
            <TextInput
              style={input}
              placeholder="Enter your Email"
              onPressIn={() => setErrormsg(null)}
              onChangeText={text => setFdata({...fdata, email: text})}
            />
          </View>
          <View style={formgroup}>
            <Text style={label}>DOB</Text>
            <TextInput
              style={input}
              placeholder="Enter your Date of Birth"
              onPressIn={() => setErrormsg(null)}
              onChangeText={text => setFdata({...fdata, dob: text})}
            />
          </View>
          <View style={formgroup}>
            <Text style={label}>Password</Text>
            <TextInput
              style={input}
              placeholder="Enter your Password"
              onPressIn={() => setErrormsg(null)}
              secureTextEntry={true}
              onChangeText={text => setFdata({...fdata, password: text})}
            />
          </View>

          <View style={formgroup}>
            <Text style={label}>Confirm Password</Text>
            <TextInput
              style={input}
              placeholder="Confirm your Password"
              onPressIn={() => setErrormsg(null)}
              secureTextEntry={true}
              onChangeText={text => setFdata({...fdata, cpassword: text})}
            />
          </View>
          <View style={formgroup}>
            <Text style={label}>Address</Text>
            <TextInput
              style={input1}
              placeholder="Enter your Address"
              onPressIn={() => setErrormsg(null)}
              onChangeText={text => setFdata({...fdata, address: text})}
            />
          </View>
          <View>

          <Text style={head1}>Enter Your Car Data</Text>
          </View>
          <View style={formgroup}>
            <Text style={label}>Brand</Text>
            <TextInput
              style={input}
              placeholder="Brand Name"
              onPressIn={() => setErrormsg(null)}
              onChangeText={text => setFdata({...fdata, brand: text})}
            />
          </View>
          <View style={formgroup}>
            <Text style={label}>Color</Text>
            <TextInput
              style={input}
              placeholder="Enter Car Color"
              onPressIn={() => setErrormsg(null)}
          
              onChangeText={text => setFdata({...fdata, color: text})}
            />
          </View>

          <View style={formgroup}>
            <Text style={label}>Product Title</Text>
            <TextInput
              style={input}
              placeholder="Product Title"
              onPressIn={() => setErrormsg(null)}
              onChangeText={text => setFdata({...fdata, productT: text})}
            />
          </View>

          <View style={formgroup}>
            <Text style={label}>Power (CC)</Text>
            <TextInput
              style={input}
              keyboardType="numeric"
              placeholder="Engine Power"
              onPressIn={() => setErrormsg(null)}
              onChangeText={text => setFdata({...fdata, power: text})}
            />
          </View>
          <View style={formgroup}>
            <Text style={label}>Sales Price</Text>
            <TextInput
              style={input}
              keyboardType="numeric"
              placeholder="Sale Price"
              onPressIn={() => setErrormsg(null)}
              onChangeText={text => setFdata({...fdata, saleP: text})}
            />
          </View>
          <View style={formgroup}>
            <Text style={label}>Federal Tax</Text>
            <TextInput
              style={input}
              keyboardType="numeric"
              placeholder="Federal Tax"
              onPressIn={() => setErrormsg(null)}
              onChangeText={text => setFdata({...fdata, federalT: text})}
            />
          </View>
          <View style={formgroup}>
            <Text style={label}>Federal Tax Amount</Text>
            <TextInput
              style={input}
              keyboardType="numeric"
              placeholder="Federal Tax Amount"
              onPressIn={() => setErrormsg(null)}
              onChangeText={text => setFdata({...fdata, federalTA: text})}
            />
          </View>
          <View style={formgroup}>
            <Text style={label}>W.H Tax</Text>
            <TextInput
              style={input}
              keyboardType="numeric"
              placeholder="W.H Tax"
              onPressIn={() => setErrormsg(null)}
              onChangeText={text => setFdata({...fdata, whT: text})}
            />
          </View>
          <View style={formgroup}>
            <Text style={label}>W.H Tax Amount</Text>
            <TextInput
              style={input}
              keyboardType="numeric"
              placeholder="W.H Tax Amount"
              onPressIn={() => setErrormsg(null)}
              onChangeText={text => setFdata({...fdata, whTA: text})}
            />
          </View>
          <View style={formgroup}>
            <Text style={label}>Sed Tax</Text>
            <TextInput
              style={input}
              keyboardType="numeric"
              placeholder="Sed Tax"
              onPressIn={() => setErrormsg(null)}
              onChangeText={text => setFdata({...fdata, sedT: text})}
            />
          </View>
          <View style={formgroup}>
            <Text style={label}>Sed Tax Amount</Text>
            <TextInput
              style={input}
              keyboardType="numeric"
              placeholder="Sed Tax Amount"
              onPressIn={() => setErrormsg(null)}
              onChangeText={text => setFdata({...fdata, sedTA: text})}
            />
          </View>
          <View style={formgroup}>
            <Text style={label}>Comission %</Text>
            <TextInput
              style={input}
              keyboardType="numeric"
              placeholder="Comission %"
              onPressIn={() => setErrormsg(null)}
              onChangeText={text => setFdata({...fdata, comm: text})}
            />
          </View>
          <View style={formgroup}>
            <Text style={label}>Comission Amount</Text>
            <TextInput
              style={input}
              keyboardType="numeric"
              placeholder="Comission Amount"
              onPressIn={() => setErrormsg(null)}
              onChangeText={text => setFdata({...fdata, commA: text})}
            />
          </View>
          <View style={formgroup}>
            <Text style={label}>FFI Amount</Text>
            <TextInput
              style={input}
              keyboardType="numeric"
              placeholder="FFI Amount"
              onPressIn={() => setErrormsg(null)}
              onChangeText={text => setFdata({...fdata, ffiA: text})}
            />
          </View>
          <View style={formgroup}>
            <Text style={label}>PDI Amount</Text>
            <TextInput
              style={input}
              keyboardType="numeric"
              placeholder="PDI Amount"
              onPressIn={() => setErrormsg(null)}
              onChangeText={text => setFdata({...fdata, pdiA: text})}
            />
          </View>
          <View style={formgroup}>
            <Text style={label}>Description</Text>
            <TextInput
              style={input1}
              placeholder="Enter your Description"
              onPressIn={() => setErrormsg(null)}
              onChangeText={text => setFdata({...fdata, description: text})}
            />
          </View>
          
      {/* <View style={styles.checkboxContainer}>
        <CheckBox
          value={check}
          onValueChange={setCheck}
          style={styles.checkbox}
        //   onChangeText={text => setFdata({...fdata, cng: text})}
        />
        <Text style={styles.label}>CNG Fitted</Text>
      
        </View> */}
          {/* <View style={formgroup}>
            <SelectList
              style={input}
              placeholder="Enter your Vehicle"
              data={data}
              setSelected={setSelected}
              save="value"
              onPressIn={() => setErrormsg(null)}
              onChangeText={text => setFdata({...fdata, enterVeh: text})}
            />
          </View> */}
          {/* <View style={styles.formgroup}>
      <MaskedTextInput
         
        mask="99/99/9999"
        onChangeText={(text, rawText) => {
          setMaskedValue(text);
          setUnmaskedValue(rawText);
        }}
        style={input}
        keyboardType="numeric"
      />
      </View> */}

          {/* <TouchableOpacity
                        onPress={() => {
                            Sendtobackend();
                        }}
                    >
                        <Text style={button1}

                        >Signup</Text>
                    </TouchableOpacity> */}

          {/* <Text style={button1}
                    onPress={()=> navigation.navigate('cars') || Sendtoback()}
                >Enter Car Info</Text>  */}
          <TouchableOpacity
            onPress={() => {
              Sendtobackend();
            }}>
            <Text style={button1}>Signup</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
  },
  patternbg: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
  container1: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  s1: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '10%',
  },
  small1: {
    color: '#fff',
    fontSize: 17,
  },
  h1: {
    fontSize: 30,
    color: '#fff',
  },
  s2: {
    display: 'flex',
    backgroundColor: '#fff',
    width: '100%',
    height: '90%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  formgroup: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginVertical: 10,
  },
  label: {
    fontSize: 17,
    color: '#000',
    marginLeft: 10,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#FFB0CC',
    borderRadius: 20,
    padding: 10,
  },
  fp: {
    display: 'flex',
    alignItems: 'flex-end',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
});
