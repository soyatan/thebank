import React from 'react';
import {ScrollView} from 'react-native';
import Item from '../../../Common/Item';
import {Svgs} from '../../../StylingConstants';

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

export default MenuAccounts;
