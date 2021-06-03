import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

export default PasswordHeader = () => {
  //  console.log('test');
  return (
    <>
      <View style={styles.passwordHeader}>
        <Text style={styles.textTitle}>Forgot My Password</Text>
      </View>
    </>
  );
};
