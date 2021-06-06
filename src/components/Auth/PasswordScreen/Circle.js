import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

export default Circle = ({no}) => {
  //  console.log('test');
  return (
    <>
      <View style={styles.circle}>
        <Text style={styles.textTitle}>{no}</Text>
      </View>
    </>
  );
};
