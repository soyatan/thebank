import React from 'react';
import {ScrollView} from 'react-native';
import Item from '../../../Common/Item';
import {Svgs} from '../../../StylingConstants';

const CardsScreen = () => {
  return (
    <ScrollView style={{flex: 1}}>
      <Item itemname="My Accounts" svg={Svgs.Briefcase} />
    </ScrollView>
  );
};

export default CardsScreen;
