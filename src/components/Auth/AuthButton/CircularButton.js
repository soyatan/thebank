import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import styles from './styles';

export default CircularButton = ({onPress}) => {
  return (
    <>
      <TouchableOpacity style={styles.circularButton} onPress={onPress}>
        <Text style={styles.textTitleWhite}>CLICK ME</Text>
      </TouchableOpacity>
    </>
  );
};
