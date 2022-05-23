import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { styles } from "./styles";

const Login = ({ navigation }) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.title_portion}>
        <Text style={styles.text}> Login</Text>
      </View>
      {/* 2nd half */}
      <View style={styles.info_portion}>
        <Text style={styles.text_label}> Name</Text>
        <TextInput
          style={styles.text_input}
          placeholder="Enter Name here"
          onChangeText={(value) => dispatch(setUserName(value))}
          />
        <Text style={styles.text_label}>Password </Text>
        <TextInput
          style={styles.text_input}
          placeholder="Enter Password here"
          onChangeText={(value) => dispatch(setUserPassword(value))}
          secureTextEntry={true}
          onSubmitEditing={(inputData) => {
            alert(inputData.nativeEvent.text);
          }}
        />
        <Text style={styles.footer_text}> Forget Password </Text>
        <View style={{ marginBottom: 20 }}></View>
        <TouchableOpacity
          style={styles.login_btn}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Text style={styles.login_btn_txt}> Login </Text>
        </TouchableOpacity>
        <View styles={styles.footer_div}>
          <Text style={styles.footer_text}> Do not have any account. </Text>
          <Text
            style={{ color: "blue" }}
            onPress={() => {
              navigation.navigate("Signup");
            }}
          >
            Signup
          </Text>
        </View>
      </View>

      {/* 3rd half */}
      <View style={styles.footer_portion}></View>
    </View>
  );
};
export default Login;
