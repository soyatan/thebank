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
  passwordHeader: {
    backgroundColor: Colors.mainGray,
    height: height * 0.07,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textAlignVertical: 'center',
  },
  verticalSpacerSmall: {
    marginVertical: height * 0.01,
  },
  textTitle: {
    fontSize: Sizes.twenty,
    fontFamily: Families.bold,
    color: Colors.mainBlack,

    textAlignVertical: 'center',
  },
  textNormal: {
    fontSize: Sizes.fourteen,
    fontFamily: Families.bold,
    color: Colors.mainBlack,
  },
  circle: {
    borderWidth: 1,
    borderRadius: 25,
    borderColor: Colors.mainGray,
    width: width * 0.11,
    height: width * 0.11,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stagesContainer: {
    flexDirection: 'row',

    width: width * 0.6,
    justifyContent: 'space-between',
    margin: width * 0.03,
    alignSelf: 'center',
  },
});
