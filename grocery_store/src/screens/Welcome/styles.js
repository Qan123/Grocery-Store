import { StyleSheet } from "react-native";
import Color from '../../services/theme/Color'

export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    title_portion:{
      flex: 1.5,
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    img: {
        flex: 1,
      height: '100%',
      width: '100%',
    },
    title_portion:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    text: {
      fontSize: 30,
      color: Color.colors.secondary,
      fontFamily: 'Roboto',
      textAlign: 'center',
      backgroundColor: Color.colors.primary,
      borderRadius: 10,
      padding: 10,
      width: '80%'
    },
    btn_portion:{
      flex: 2.5,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 150,
    },
    text_label:{
      width: '80%',
      padding: 5,
      color: Color.colors.primary,
    },
    btn: {
      marginTop: 10,
      padding: 10,
      backgroundColor: Color.colors.secondary,
      borderRadius: 5,
      paddingHorizontal: 30,
      margin: 10,
    },
    btn_txt: {
      color: Color.colors.base,
    },
  });
