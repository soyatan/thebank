import {StyleSheet} from 'react-native';

import {Colors} from '../../../constants/Colors';
import Fonts from '../../../constants/Fonts';
import {Metrics} from '../../../constants/Metrics';

const {Families, Sizes} = Fonts;
const {width, height, marginHorizontal, textMargin} = Metrics;

export default styles = StyleSheet.create({
  circularButton: {
    backgroundColor: Colors.mainColor,
    borderRadius: width * 0.1,
    borderWidth: 1,
    height: height * 0.075,
    marginTop: height * 0.04,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitleWhite: {
    fontSize: Sizes.eighteen,
    fontFamily: Families.bold,
    color: Colors.mainWhite,

    textAlignVertical: 'center',
  },
});
