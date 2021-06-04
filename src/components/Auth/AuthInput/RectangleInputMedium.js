import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import styles from './styles';

export default RectangleInputMedium = ({
  label,
  onChangeText,
  secureTextEntry,
  keyboardType,
  onEndEditing,
}) => {
  return (
    <>
      <View style={styles.rectangleMediumInputContainer}>
        <TextInput
          label={label}
          style={styles.textinput}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          onEndEditing={onEndEditing}
        />
      </View>
    </>
  );
};
