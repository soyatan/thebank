import {StyleSheet} from 'react-native';
import {
  width,
  height,
  marginHorizontal,
  textMargin,
} from '../../../constants/Metrics';

import {Colors} from '../../../constants/Colors';
import Fonts from '../../../constants/Fonts';
console.log(Fonts);
const {Families, Sizes} = Fonts;

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.maingray,
  },
  passwordHeader: {
    backgroundColor: Colors.maingray,
    height: height * 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitle: {
    fontSize: Sizes.eighteen,
    fontFamily: Families.bold,
  },
});
