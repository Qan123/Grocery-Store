import * as React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import Color from "../../../../services/theme/Color";
// import styles from './styles';

const Data = [
  {
    title: "Tomato",
    image: require("./../../../../../assets/images/apple.jpg"),
  },
  {
    title: "Patato",
    image: require("./../../../../../assets/images/logo.png"),
  },
  {
    title: "Carrot",
    image: require("./../../../../../assets/images/apple.jpg"),
  },
];

const Vegetables = () => {
    const [value, setValue] = React.useState(0);

  const Item = ({ title }, { image }) => {
    return (
      <View style={styles.item}>
        <Image style={styles.img} source={image} />
        <Text style={styles.title}>{title}</Text>

        <Text style={styles.plus}> - </Text>
        <Text style={styles.title}>{value}</Text>
        <Text style={styles.title}> + </Text>
        <Text style={{backgroundColor: Color.colors.primary, color: 'white'}}> Rs.5 </Text>

        <TouchableOpacity style={styles.btn} onPress={() => {}}>
          <Text style={styles.btn_txt}> Add </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderItem = ({ item }) => (
    <Item title={item.title} image={item.image} />
  );

  return <FlatList data={Data} renderItem={renderItem} />;
};

export default Vegetables;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flexDirection: "row",
    backgroundColor: Color.colors.secondary,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    color: "white",
  },
  img: {
    height: 30,
    width: 30,
    borderRadius: 25,
    backgroundColor: "white",
    marginRight: 10,
  },
  btn: {
    padding: 10,
    backgroundColor: Color.colors.primary,
    borderRadius: 5,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    position: "absolute",
    marginLeft: 250,
  },
  btn_txt: {
    color: Color.colors.base,
  },
  plus: {
    fontSize: 16,
    color: "white",
    paddingLeft: 60,
  },
});
