import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StoreNavigator from "./Store.Navigator";
import Cart from "../../screens/Home/Cart";
import Color from "../theme/Color";

const Tab = createBottomTabNavigator();

const TabBar = () => {};

const HomeNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Store"
      screenOptions={{
        tabBarLabelStyle: { fontSize: 18 },
        tabBarStyle: {
          // backgroundColor: Color.colors.secondary
        },
      }}
    >
      <Tab.Screen name="Store" component={StoreNavigator} />
      <Tab.Screen name="Cart" component={Cart} />
    </Tab.Navigator>
  );
};

export default HomeNavigator;
