import {StyleSheet} from 'react-native';

import {Colors} from '../../../constants/Colors';
import Fonts from '../../../constants/Fonts';
import {Metrics} from '../../../constants/Metrics';

const {Families, Sizes} = Fonts;
const {width, height, marginHorizontal, textMargin} = Metrics;

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    backgroundColor: Colors.mainGray,

    paddingHorizontal: marginHorizontal,
  },
});
