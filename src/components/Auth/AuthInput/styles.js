import {StyleSheet} from 'react-native';

import {Colors} from '../../../constants/Colors';
import Fonts from '../../../constants/Fonts';
import {Metrics} from '../../../constants/Metrics';

const {Families, Sizes} = Fonts;
const {width, height, marginHorizontal, textMargin} = Metrics;

export default styles = StyleSheet.create({
  rectangleInputContainer: {
    marginVertical: height * 0.015,
    //width: width * 0.8,
    borderWidth: 1,
    borderRadius: width * 0.02,
    height: height * 0.075,
    borderColor: Colors.mainWhite,
  },
  rectangleSmallInputContainer: {
    marginVertical: height * 0.015,
    width: width * 0.32,
    borderWidth: 1,
    borderRadius: width * 0.02,
    height: height * 0.075,
    borderColor: Colors.mainWhite,
  },
  rectangleMediumInputContainer: {
    marginVertical: height * 0.015,
    width: width * 0.53,
    borderWidth: 1,
    borderRadius: width * 0.02,
    height: height * 0.075,
    borderColor: Colors.mainWhite,
  },
  textinput: {},
});
