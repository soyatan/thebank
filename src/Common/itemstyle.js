import { StyleSheet } from 'react-native';
import { Metrics } from '../constants/Metrics';

export default StyleSheet.create({
    touchableOpSty: {
        height: Metrics.width * 0.12,
        flex: 1,
        borderBottomWidth: 1,
        borderColor: '#cccccc',
        flexDirection: 'row',
        alignItems: 'center',
    },
    viewSty:
    {
        flex: 0.1,
        padding: 5,
        marginHorizontal: Metrics.width*0.025
    },
    textSty:{
        flex: 0.9
    }
});
