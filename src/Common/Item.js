import React from 'react';
import { Text,View,TouchableOpacity } from 'react-native';
import Icon from '../Common/Icon';
import { Svgs } from '../StylingConstants'

const Item = props => {
    return (
            <TouchableOpacity style={{flex:1,
            borderBottomWidth:1,
            borderColor:'#cccccc',
            flexDirection:'row',
            alignItems:'center',
            height:60
           //  padding:3,
            }}>
               <View style={{flex:0.1,padding:5,marginHorizontal:10}}>
                   <Icon svg={props.svg} iconStyle={{ color: 'red' }}>
                   </Icon>
               </View>
               <Text style={{flex:0.9}}>{props.itemname}</Text>
           </TouchableOpacity>
    );
};

export default Item;
