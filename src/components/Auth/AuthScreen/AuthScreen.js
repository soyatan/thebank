import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import PersonalAuthContainer from './PersonalAuthContainer';
import styles from './styles';

export default AuthScreen = () => {
  const [type, settype] = useState('personal');
  //  console.log('test');
  return (
    <>
      <View style={styles.container}>
        {/* ImageBackground */}
        {/* LogoWhite */}
        <Text style={styles.textTitle}>
          Welcome To Our Mobile Banking Application
        </Text>
        {type === 'personal' ? (
          <PersonalAuthContainer />
        ) : (
          <Text>
            CorporateAuthContainer(şu aşamada bu coponent boş geçebiliriz)
          </Text>
        )}
      </View>
    </>
  );
};
