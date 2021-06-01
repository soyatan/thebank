import React from 'react';
import { Text, View,TouchableOpacity } from 'react-native';
import Icon from '../Assets/Icon';
import { Svgs } from '../StylingConstants'

const AccountsScreen = props => {
    return (
        <TouchableOpacity style={{flex: 0.1,
         borderBottomWidth:1,
         borderColor:'#cccccc',
         flexDirection:'row',
         alignItems:'center',
        //  padding:3,
         }}>
            <View style={{flex:0.15,padding:5,marginHorizontal:10}}>
                <Icon svg={Svgs.Briefcase} iconStyle={{ color: 'red' }}>

                </Icon>
            </View>
            <Text >My Accounts</Text>
        </TouchableOpacity>
    );
};

export default AccountsScreen;
