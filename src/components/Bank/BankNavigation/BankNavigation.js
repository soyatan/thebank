import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AccountsScreen from '../AccountsScreen.js/AccountsScreen';
import CardsScreen from '../CardsScreen.js/CardsScreen';
const Bank = createStackNavigator();

const BankNavigation = () => {
  return (
    <Bank.Navigator
      initialRouteName="Accounts"
      screenOptions={{headerShown: false}}>
      <Bank.Screen name="Accounts" component={AccountsScreen} />
      <Bank.Screen name="Cards" component={CardsScreen} />
    </Bank.Navigator>
  );
};
export default BankNavigation;
