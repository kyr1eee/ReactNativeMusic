import { StyleSheet } from 'react-native';
import { styleConstant } from '../styles/constant'
export const styles = StyleSheet.create({
    container: {
        backgroundColor: styleConstant.bgColor.tab,
        paddingBottom: 1,
    },
    label: {
        fontSize: 12,
        margin: 1,
        fontWeight: 'bold'
    }
});