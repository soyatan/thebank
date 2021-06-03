import {StyleSheet} from 'react-native';
import {
  width,
  height,
  marginHorizontal,
  textMargin,
} from '../../../constants/Metrics';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  passwordHeader: {
    backgroundColor: 'red',
    height: height * 0.1,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
