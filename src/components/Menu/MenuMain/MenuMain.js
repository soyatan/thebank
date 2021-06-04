import React, {useState} from 'react';
import {FlatList, ScrollView} from 'react-native';
import Item from '../../../Common/Item';
import {Svgs} from '../../../StylingConstants';

const MenuMain = ({navigation}) => {
  const menuList = [
    {
      name: 'Accounts',
      iconName: 'Briefcase',
      subMenu: [
        {name: 'My Accounts', iconname: 'Briefcase'},
        {name: 'New Accounts', iconname: 'OpenAccount'},
        {name: 'My Drawing Accounts', iconname: 'DrawingAccount'},
        {name: 'My Deposit Accounts', iconname: 'DepositAccount'},
        {name: 'My Gold Accounts', iconname: 'GoldAccount'},
        {name: 'My Credit Accounts', iconname: 'CreditAccount'},
        {name: 'My Investment Accounts', iconname: 'Investment'},
        {name: 'POS', iconname: 'Pos'},
      ],
    },
    {
      name: 'Transfers',
      iconName: 'Briefcase',
      subMenu: [{name: 'My Accounts', iconname: 'Briefcase'}],
    },
    {
      name: 'My Cards',
      iconName: 'Briefcase',
      subMenu: [{name: 'My Accounts', iconname: 'Briefcase'}],
    },
    {
      name: 'Payments',
      iconName: 'Briefcase',
      subMenu: [{name: 'My Accounts', iconname: 'Briefcase'}],
    },
    {
      name: 'Exchange and Gold',
      iconName: 'Briefcase',
      subMenu: [{name: 'My Accounts', iconname: 'Briefcase'}],
    },
  ];

  return (
    <FlatList
      data={menuList}
      renderItem={item => {
        return (
          <Item
            itemname={item.item.name}
            svg={item.item.iconName}
            onPress={() =>
              navigation.navigate('Sub', {menu: item.item.subMenu})
            }
          />
        );
      }}
      keyExtractor={(item, index) => index}
    />
  );
};

export default MenuMain;
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
