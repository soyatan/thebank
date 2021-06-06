import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Grads} from '../../../constants/Colors';
import styles from './styles';
import Icon from '../../../Common/Icon';
import Power from '../../../Assets/Svgs/power.svg';
import Bell from '../../../Assets/Svgs/bell.svg';
import Line from './line';
export default BankHeader = () => {
  return (
    <>
      <View style={styles.headercontainer}>
        <Power width={30} height={30} />
        <View style={styles.headerWithLines}>
          <Text style={styles.textTitle}>My Accounts</Text>
          <View style={styles.linescontainer}>
            <Line />
            <Line />
            <Line />
            <Line />
            <Line />
            <Line />
            <Line />
            <Line />
          </View>
        </View>
        <Bell width={30} height={30} />
      </View>
    </>
  );
};
//<Icon svg="Power" iconStyle={{color: 'white'}} />
