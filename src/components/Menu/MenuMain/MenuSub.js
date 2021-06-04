import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView} from 'react-native';
import Animated from 'react-native-reanimated';
import Item from '../../../Common/Item';
import {Svgs} from '../../../StylingConstants';

const MenuSub = ({route, navigation}) => {
  const subMenu = route.params.menu;

  return (
    <FlatList
      data={subMenu}
      renderItem={item => {
        return <Item itemname={item.item.name} svg={item.item.iconname} />;
      }}
      keyExtractor={(item, index) => index}
    />
  );
};

export default MenuSub;
/*
const MenuAccounts = props => {
  return (
    <ScrollView style={{flex: 1}}>
      <Item itemname="My Accounts" svg={Svgs.Briefcase} />
      <Item itemname="New Accounts" svg={Svgs.OpenAccount} />
      <Item itemname="My Drawing Accounts" svg={Svgs.DrawingAccount} />
      <Item itemname="My Deposit Accounts" svg={Svgs.DepositAccount} />

      <Item itemname="My Gold Accounts" svg={Svgs.GoldAccount} />
      <Item itemname="My Credit Accounts" svg={Svgs.CreditAccount} />
      <Item itemname="My Investment Accounts" svg={Svgs.Investment} />
      <Item itemname="POS" svg={Svgs.Pos} />
    </ScrollView>
  );
};


*/
