import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
const CommonBtn = ({w, h, txt, onClick, status}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onClick();
      }}
      style={{alignSelf: 'center', marginTop: 10, marginBottom: 10}}>
      {status ? (
        <View
          style={[
            styles.button,
            {
              backgroundColor: status ? '#009FFD' : '#8e8e8e',
              opacity: status ? 1 : 0.5,
              width: w,
              height: h,
              borderRadius: 10,
            },
          ]}>
          <Text style={{color: '#fff', fontSize: 16}}>{txt}</Text>
        </View>
      ) : (
        <View
          style={[
            styles.button,
            {
              backgroundColor: status ? '#8e8e8e' : '#8e8e8e',
              opacity: status ? 1 : 0.5,
              width: w,
              height: h,
              borderRadius: 10,
            },
          ]}>
          <Text style={{color: '#fff', fontSize: 16}}>{txt}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CommonBtn;
const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
