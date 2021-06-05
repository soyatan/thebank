import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Grads} from '../../../constants/Colors';
import styles from './styles';

export default PasswordHeader = ({bgColor}) => {
  const GR = Grads[bgColor];
  return (
    <>
      <LinearGradient
        colors={GR.colors}
        style={styles.passwordHeader}
        start={GR.start}
        end={GR.end}>
        <Text style={styles.textTitle}>Forgot My Password</Text>
      </LinearGradient>
    </>
  );
};
