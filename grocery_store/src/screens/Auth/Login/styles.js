import { StyleSheet } from "react-native";
import Color from '../../../services/theme/Color'

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Color.colors.base,
    },
    title_portion:{
      flex: 1.5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    img: {
      height: 80,
      width: 80,
      borderRadius: 40,
    },
    text: {
      fontSize: 30,
      color: Color.colors.secondary,
      fontFamily: 'Roboto',
    },
    info_portion:{
      flex: 2.5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text_label:{
      width: '80%',
      padding: 5,
      color: Color.colors.primary,
    },
    text_input: {
      backgroundColor: Color.colors.secondary,
      color: Color.colors.primary,
      height: 40,
      width: '80%',
      borderRadius: 10,
      padding: 10,
    },
    login_btn: {
      marginTop: 10,
      padding: 10,
      backgroundColor: Color.colors.secondary,
      borderRadius: 5,
      paddingHorizontal: 50,
    },
    login_btn_txt: {
      color: Color.colors.base,
    },
    footer_portion:{
      // backgroundColor: 'gray',
      flex: 0.5,
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    footer_div:{
      padding: 20,
      flexDirection: 'row',
      
    },
    footer_text:{
      color: 'black',
    }
  });
