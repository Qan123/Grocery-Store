import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from "../../screens/Welcome"
import Login from '../../screens/Auth/Login';
import Signup from '../../screens/Auth/Signup';
import HomeNavigator from './home';
import Profile from '../../screens/Home/Profile';
import Flatlist from '../../screens/Home/Flatlist';

const Stack = createNativeStackNavigator();

export default function Root() {

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Welcome' >
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Home" component={HomeNavigator} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
