import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Grads} from '../../../constants/Colors';
import styles from './styles';
import Icon from '../../../Common/Icon';

export default BankHeader = () => {
  return (
    <>
      <View style={styles.headercontainer}>
        <Text style={styles.textTitle}>My Accounts</Text>
        <Icon svg="Briefcase" width={35} height={35} />
      </View>
    </>
  );
};
