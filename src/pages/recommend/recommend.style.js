import { StyleSheet } from 'react-native';
import { styleConstant } from '../../styles/constant';
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
export const styles = StyleSheet.create({
    container: {
    },
    recommendHeader: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width,
        height: 40,
        backgroundColor: styleConstant.bgColor.init
    },
    recommendHeaderText: {
        fontWeight: 'bold'
    }
})