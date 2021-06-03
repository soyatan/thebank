import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import PersonalAuthContainer from './PersonalAuthContainer';
import styles from './styles';

export default PasswordScreen = () => {
  //  console.log('test');
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.textTitle}>Forgot my PassWord!</Text>
      </View>
    </>
  );
};
