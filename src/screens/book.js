import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import CommonBtn from '../common/commonBtn';
import welcomelogo from '../../assets/bookm.jpg';
const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.container}>
          {/* <Header title={'DoctorApp'} icon={require('../images/logo.png')} /> */}
          <Image style={styles.banner} source={welcomelogo} />
          <Text style={styles.heading}>Work Category</Text>
          <View style={{marginTop: 20}}>
            <FlatList
              data={[1, 1, 1, 1, 1, 1, 1]}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity>
                    <View
                      style={[
                        styles.category,
                        {
                          backgroundColor:
                            index % 2 === 0 ? '#009FFD' : '#2A2A72',
                        },
                      ]}>
                      <Text style={styles.catName}>
                        {'Category ' + (index + 1)}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>

          <Text style={styles.heading}>Our Work Shop </Text>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={styles.docItem}>
              <Text style={styles.docName}>Tyre Shop </Text>
              <Text style={styles.docSpl}>Complete Tyre work</Text>
              <Text style={[styles.status, {color: 'green'}]}>Available</Text>
              <CommonBtn
                w={150}
                h={40}
                status={true}
                txt={'Book Appointment'}
                onClick={() => {
                  navigation.navigate('BookAppointment');
                }}
              />
            </View>

            <View style={styles.docItem}>
              <Text style={styles.docName}>Mechanic Shop </Text>
              <Text style={styles.docSpl}>Complete Mechanical Work</Text>
              <Text style={[styles.status, {color: 'green'}]}>Available</Text>
              <CommonBtn
                w={150}
                h={40}
                status={true}
                txt={'Book Appointment'}
                onClick={() => {
                  navigation.navigate('BookAppointment');
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomView}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Completed');
          }}>
          {/* <Image style={styles.logo} source={welcomelogo} /> */}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Pending');
          }}>
          {/* <Image style={styles.logo} source={welcomelogo} /> */}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CallAmb');
          }}>
          {/* <Image style={styles.logo} source={welcomelogo} /> */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  banner: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 10,
  },
  heading: {
    color: '#000',
    fontSize: 18,
    fontWeight: '700',
    marginTop: 15,
    marginLeft: 15,
  },
  linearGradient: {
    width: 120,
    height: 80,
    borderRadius: 10,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  catName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  docItem: {
    width: '45%',

    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 0.2,
    margin: 10,
  },
  docImg: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignSelf: 'center',
    marginTop: 20,
  },
  docName: {
    fontSize: 18,
    fontWeight: '700',
    alignSelf: 'center',
    marginTop: 10,
  },
  docSpl: {
    fontSize: 14,
    marginTop: 5,
    fontWeight: '600',
    alignSelf: 'center',
    color: 'green',
    backgroundColor: '#f2f2f2',
    padding: 5,
    borderRadius: 10,
  },
  status: {
    fontSize: 14,
    marginTop: 5,
    fontWeight: '600',
    alignSelf: 'center',
  },
  bottomView: {
    width: '90%',
    height: 60,
    borderRadius: 10,
    elevation: 5,
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#fff',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  bottomIcon: {
    width: 30,
    height: 30,
  },
  category: {
    width: 120,
    height: 80,
    borderRadius: 10,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  catName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});
