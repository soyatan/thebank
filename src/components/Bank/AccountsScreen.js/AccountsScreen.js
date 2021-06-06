import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import Item from '../../../Common/Item';
import {Svgs} from '../../../StylingConstants';
import {Grads} from '../../../constants/Colors';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import BankHeader from '../BankHeader/BankHeader';
const AccountsScreen = props => {
  const GR = Grads.lightGray;
  return (
    <LinearGradient
      colors={GR.colors}
      style={styles.container}
      start={GR.start}
      end={GR.end}>
      <BankHeader />
      <Text>Welcome to Accounts screen</Text>
    </LinearGradient>
  );
};

export default AccountsScreen;
