import {StyleSheet} from 'react-native';

import {Colors} from '../../../constants/Colors';
import Fonts from '../../../constants/Fonts';
import {Metrics} from '../../../constants/Metrics';

const {Families, Sizes} = Fonts;
const {width, height, marginHorizontal, textMargin} = Metrics;

export default styles = StyleSheet.create({
  headercontainer: {
    //alignItems: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: height * 0.08,
  },
  textTitle: {
    fontSize: Sizes.twenty,
    fontFamily: Families.bold,
    color: Colors.mainBlack,

    textAlignVertical: 'center',
  },
  headerWithLines: {
    height: '100%',
    width: width * 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linescontainer: {
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: height * 0.003,

    width: '100%',
    flexDirection: 'row',
    alignContent: 'space-between',
  },
  line: {
    width: width * 0.03,
    height: height * 0.005,
    backgroundColor: 'black',
  },
});
