import {
  Image, Text, TextInput, TouchableOpacity, View
} from "react-native";
import { styles } from "./styles";

export default function Signup({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.title_portion}>
        <Text style={styles.text}> Sign Up</Text>
      </View>
      {/* 2nd half */}
      <View style={styles.info_portion}>
        <Text style={styles.text_label}> Name</Text>
        <TextInput
          style={styles.text_input}
          placeholder="Enter Name here"
          keyboardType="email-address"
        />

        <Text style={styles.text_label}>Password </Text>
        <TextInput
          style={styles.text_input}
          placeholder="Enter Password here"
          secureTextEntry={true}
          onSubmitEditing={(inputData) => {
            alert(inputData.nativeEvent.text);
          }}
        />
        <Text style={styles.text_label}>Confirm Password </Text>
        <TextInput
          style={styles.text_input}
          placeholder="Enter Password here"
          secureTextEntry={true}
          onSubmitEditing={(inputData) => {
            alert(inputData.nativeEvent.text);
          }}
        />
        <View style={{ marginBottom: 20 }}></View>
        <TouchableOpacity
          style={styles.login_btn}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={styles.login_btn_txt}> Sign Up </Text>
        </TouchableOpacity>
        <View styles={styles.footer_div}></View>
      </View>

      {/* 3rd half */}
      <View style={styles.footer_portion}></View>
    </View>
  );
}
