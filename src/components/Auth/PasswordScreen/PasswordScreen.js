import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import CircularButton from '../AuthButton/CircularButton';
import RectangleInput from '../AuthInput/RectangleInput';
import RectangleInputMedium from '../AuthInput/RectangleInputMedium';
import RectangleInputSmall from '../AuthInput/RectangleInputSmall';
import LinearGradient from 'react-native-linear-gradient';
import Circle from './Circle';

import styles from './styles';
import {Grads} from '../../../constants/Colors';

export default PasswordScreen = () => {
  const GR = Grads.darkGray;
  const [ID, setID] = useState('55232380');
  //  console.log('test');
  return (
    <>
      <LinearGradient
        colors={GR.colors}
        style={styles.container}
        start={GR.start}
        end={GR.end}>
        <View style={styles.stagesContainer}>
          <Circle no={1} />
          <Circle no={2} />
          <Circle no={3} />
          <Circle no={4} />
        </View>
        <Text style={styles.textTitle}>Personal Information</Text>
        <View style={styles.verticalSpacerSmall}></View>
        <Text style={styles.textNormal}>National ID Number</Text>
        <RectangleInput
          label={'label'}
          onChangeText={setID}
          secureTextEntry={true}
          keyboardType={'numeric'}
          onEndEditing={() => console.log(ID)}
        />
        <Text style={styles.textNormal}>Mobile Phone Number</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <RectangleInputSmall
            label={'label'}
            onChangeText={setID}
            secureTextEntry={true}
            keyboardType={'numeric'}
            onEndEditing={() => console.log(ID)}
          />
          <RectangleInputMedium
            label={'label'}
            onChangeText={setID}
            secureTextEntry={true}
            keyboardType={'numeric'}
            onEndEditing={() => console.log(ID)}
          />
        </View>
        <Text style={styles.textNormal}>Security Code</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <RectangleInputMedium
            label={'label'}
            onChangeText={setID}
            secureTextEntry={true}
            keyboardType={'numeric'}
            onEndEditing={() => console.log(ID)}
          />
          <RectangleInputSmall
            label={'label'}
            onChangeText={setID}
            secureTextEntry={true}
            keyboardType={'numeric'}
            onEndEditing={() => console.log(ID)}
          />
        </View>
        <CircularButton onPress={() => console.log('you pressed it')} />
      </LinearGradient>
    </>
  );
};
