import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Fruits from '../../screens/Home/Store/Fruits';
import Vegetables from '../../screens/Home/Store/Vegetables';
import Snacks from '../../screens/Home/Store/Snacks';
import Color from '../theme/Color';

const Tab =  createMaterialTopTabNavigator();

const TabBar = () => {

}
const StoreNavigator = () => {

    return (
        <Tab.Navigator initialRouteName='Fruits' screenOptions={{
            tabBarLabelStyle: { fontSize: 14 },
            // tabBarStyle: { backgroundColor: Color.colors.secondary },
          }}>
            <Tab.Screen name= 'Fruits' component={Fruits} />
            <Tab.Screen name= 'Vegetables' component={Vegetables} />
            <Tab.Screen name= 'Snacks' component={Snacks} />
        </Tab.Navigator>

    );
}

export default StoreNavigator;
