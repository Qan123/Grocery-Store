import * as React from "react";
import {
  SafeAreaView,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";

const Welcome = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../../assets/images/background.jpg")}
        resizeMode="cover"
        style={styles.img}
      >
        <View style={styles.title_portion}>
          <Text style={styles.text}> Grocery Store</Text>
        </View>
        <View style={styles.btn_portion}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                navigation.navigate("Signup");
              }}
            >
              <Text style={styles.btn_txt}> Sign Up </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <Text style={styles.btn_txt}> Login </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Welcome;
