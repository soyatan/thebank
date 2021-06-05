import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from '../Common/Icon';
import {Svgs} from '../StylingConstants';
import styles from './itemstyle'

const Item = props => {
  return (
    <TouchableOpacity
      style={styles.touchableOpSty}
      onPress={props.onPress}>
      <View style={styles.viewSty}>
        <Icon svg={props.svg} iconStyle={{color: 'red'}}></Icon>
      </View>
      <Text style={styles.textSty}>{props.itemname}</Text>
    </TouchableOpacity>
  );
};

export default Item;
