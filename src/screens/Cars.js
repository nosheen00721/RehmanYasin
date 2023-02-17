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
import CheckBox from '@react-native-community/checkbox';

const Signup = ({navigation}) => {
  //checkBox
  const [check, setCheck] = React.useState();
  const [cdata, setCdata] = useState({
     brand:"",
        enterVeh:"",
        vehV:"",
        color:"",
        productT:"",
        power:"",
        saleP:"",
        federalT:"",
        federalTA:"",
        whT:"",
        whTA:"",
        sedT:"",
        sedTA:"",
        comm:"",
        commA:"",
        ffiA:"",
        pdiA:"",
        description:""
   
  });
  const [selected, setSelected] = React.useState('');
  //DropDown For Vehicle
  let data = [
    {
      value: 'Alto',
    },
    {
      value: 'WagonR',
    },
    {
      value: 'Cultus',
    },
    {
      value: 'Swift',
    },
    {
      value: 'Bolan',
    },
    {
      value: 'Cargo Van',
    },
    {
      value: 'Ravi',
    },
    {
      value: 'Ravi w/o Deck',
    },
  ];
  //Version Data
  const [version, setversion] = React.useState('');
  let vdata = [
    {
      value: 'VXR',
    },
    {
      value: 'VX',
    },
    {
      value: 'VXR-AGS',
    },
    {
      value: 'VXL-AGS',
    },
    {
      value: 'VXL',
      value: 'AGS',
    },
    {
      value: 'GL',
    },
    {
      value: 'GL (CVT)',
    },
    {
      value: 'GL (CVT) Limited Edition',
    },
    {
      value: 'GLX (CVT)',
    },
    {
      value: 'Bolan',
    },
    {
      value: 'Cargo Van',
    },
    {
      value: 'Ravi',
    },
    {
      value: 'Ravi w/o Deck',
    },
  ];

  const [errormsg, setErrormsg] = useState(null);

  const Sendtobackend = () => {
    console.log(cdata);
    if (
       cdata.brand==''||
        cdata.enterVeh==''||
        cdata.vehV==''||
        cdata.color==''||
        cdata.productT==''||
        cdata.power==''||
        cdata.saleP==''||
        cdata.federalT==''||
        cdata.federalTA==''||
        cdata.whT==''||
        cdata.whTA==''||
        cdata.sedT==''||
        cdata.sedTA==''||
        cdata.comm==''||
        cdata.commA==''||
        cdata.ffiA==''||
       cdata. pdiA==''||
        cdata.description==''
            


    ) {
      setErrormsg('All fields are required');
      return;
    } else {
       {
        fetch(' https://26cf-39-42-183-102.in.ngrok.io/car', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(cdata),
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.error === 'Invalid Credentials') {
              // alert('Invalid Credentials')
              setErrormsg('Invalid Credentials');
            } else if (
              data.message === 'Verification Code Sent to your Email'
            ) {
              // console.log(data.udata);
              alert(data.message);
              navigation.navigate('verification', {cardata: data.cdata});
            }
          }).catch((error) => {
            //                  Handle any errors that occur
                                 console.error(error);
                            });
          
      }
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.patternbg} source={pattern} />

      <View style={styles.container1}>
        <View style={styles.s1}></View>
        <ScrollView style={styles.s2}>
          <Text style={head1}>Enter Your Car Data</Text>
          <Text style={link2}>
            Already Registered?&nbsp;
            <Text style={link} onPress={() => navigation.navigate('login')}>
              Login here
            </Text>
          </Text>
          {errormsg ? <Text style={errormessage}>{errormsg}</Text> : null}
          <View style={formgroup}>
            <Text style={label}>Brand</Text>
            <TextInput
              style={input}
              placeholder="Brand Name"
              onPressIn={() => setErrormsg(null)}
              onChangeText={text => setCdata({...cdata, brand: text})}
            />
          </View>
          <View style={formgroup}>
            <SelectList
              style={input}
              placeholder="Enter your Vehicle"
              data={data}
              setSelected={setSelected}
              save="value"
              onPressIn={() => setErrormsg(null)}
              onChangeText={text => setCdata({...cdata, enterVeh: text})}
            />
          </View>
          <View style={formgroup}>
            <SelectList
              style={input}
              placeholder="Vehicle Version"
              data={vdata}
              setSelected={setSelected}
              save="value"
              onPressIn={() => setErrormsg(null)}
              onChangeText={text => setCdata({...cdata, vehV: text})}
            />
          </View>
          <View style={formgroup}>
            <Text style={label}>Color</Text>
            <TextInput
              style={input}
              placeholder="Enter Car Color"
              onPressIn={() => setErrormsg(null)}
          
              onChangeText={text => setCdata({...cdata, color: text})}
            />
          </View>

          <View style={formgroup}>
            <Text style={label}>Product Title</Text>
            <TextInput
              style={input}
              placeholder="Product Title"
              onPressIn={() => setErrormsg(null)}
              onChangeText={text => setCdata({...cdata, productT: text})}
            />
          </View>

          <View style={formgroup}>
            <Text style={label}>Power (CC)</Text>
            <TextInput
              style={input}
              keyboardType="numeric"
              placeholder="Engine Power"
              onPressIn={() => setErrormsg(null)}
              onChangeText={text => setCdata({...cdata, power: text})}
            />
          </View>
          <View style={formgroup}>
            <Text style={label}>Sales Price</Text>
            <TextInput
              style={input}
              keyboardType="numeric"
              placeholder="Sale Price"
              onPressIn={() => setErrormsg(null)}
              onChangeText={text => setCdata({...cdata, saleP: text})}
            />
          </View>
          <View style={formgroup}>
            <Text style={label}>Federal Tax</Text>
            <TextInput
              style={input}
              keyboardType="numeric"
              placeholder="Federal Tax"
              onPressIn={() => setErrormsg(null)}
              onChangeText={text => setCdata({...cdata, federalT: text})}
            />
          </View>
          <View style={formgroup}>
            <Text style={label}>Federal Tax Amount</Text>
            <TextInput
              style={input}
              keyboardType="numeric"
              placeholder="Federal Tax Amount"
              onPressIn={() => setErrormsg(null)}
              onChangeText={text => setCdata({...cdata, federalTA: text})}
            />
          </View>
          <View style={formgroup}>
            <Text style={label}>W.H Tax</Text>
            <TextInput
              style={input}
              keyboardType="numeric"
              placeholder="W.H Tax"
              onPressIn={() => setErrormsg(null)}
              onChangeText={text => setCdata({...cdata, whT: text})}
            />
          </View>
          <View style={formgroup}>
            <Text style={label}>W.H Tax Amount</Text>
            <TextInput
              style={input}
              keyboardType="numeric"
              placeholder="W.H Tax Amount"
              onPressIn={() => setErrormsg(null)}
              onChangeText={text => setCdata({...cdata, whTA: text})}
            />
          </View>
          <View style={formgroup}>
            <Text style={label}>Sed Tax</Text>
            <TextInput
              style={input}
              keyboardType="numeric"
              placeholder="Sed Tax"
              onPressIn={() => setErrormsg(null)}
              onChangeText={text => setCdata({...cdata, sedT: text})}
            />
          </View>
          <View style={formgroup}>
            <Text style={label}>Sed Tax Amount</Text>
            <TextInput
              style={input}
              keyboardType="numeric"
              placeholder="Sed Tax Amount"
              onPressIn={() => setErrormsg(null)}
              onChangeText={text => setCdata({...cdata, sedTA: text})}
            />
          </View>
          <View style={formgroup}>
            <Text style={label}>Comission %</Text>
            <TextInput
              style={input}
              keyboardType="numeric"
              placeholder="Comission %"
              onPressIn={() => setErrormsg(null)}
              onChangeText={text => setCdata({...cdata, comm: text})}
            />
          </View>
          <View style={formgroup}>
            <Text style={label}>Comission Amount</Text>
            <TextInput
              style={input}
              keyboardType="numeric"
              placeholder="Comission Amount"
              onPressIn={() => setErrormsg(null)}
              onChangeText={text => setCdata({...cdata, commA: text})}
            />
          </View>
          <View style={formgroup}>
            <Text style={label}>FFI Amount</Text>
            <TextInput
              style={input}
              keyboardType="numeric"
              placeholder="FFI Amount"
              onPressIn={() => setErrormsg(null)}
              onChangeText={text => setCdata({...cdata, ffiA: text})}
            />
          </View>
          <View style={formgroup}>
            <Text style={label}>PDI Amount</Text>
            <TextInput
              style={input}
              keyboardType="numeric"
              placeholder="PDI Amount"
              onPressIn={() => setErrormsg(null)}
              onChangeText={text => setCdata({...cdata, pdiA: text})}
            />
          </View>
          <View style={formgroup}>
            <Text style={label}>Description</Text>
            <TextInput
              style={input1}
              placeholder="Enter your Description"
              onPressIn={() => setErrormsg(null)}
              onChangeText={text => setCdata({...cdata, description: text})}
            />
          </View>
          
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={check}
          onValueChange={setCheck}
          style={styles.checkbox}
        />
        <Text style={styles.label}>CNG Fitted</Text>
      
        </View>
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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
