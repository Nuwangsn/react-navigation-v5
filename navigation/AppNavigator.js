import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import MarketScreen from '../screens/MarketScreen';
import StayScreen from '../screens/StayScreen';
import TabBar from './TabBar';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const TabsScreen = () => {
  return (
    <Tabs.Navigator tabBar={props => <TabBar {...props} />}>
      <Tabs.Screen name="Login" component={LoginScreen} initialParams={{icon:'home'}} />
      <Tabs.Screen name="Home" component={HomeScreen} initialParams={{icon:'search-outline'}} />
      <Tabs.Screen name="Details" component={DetailScreen} initialParams={{icon:'add-circle-outline'}} />
      <Tabs.Screen name="Market" component={MarketScreen} initialParams={{icon:'chatbubble-outline'}} />
      <Tabs.Screen name="Stay" component={StayScreen} initialParams={{icon:'person-outline'}} />
    </Tabs.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TabsScreen" component={TabsScreen} />
      {/* <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} /> */}
    </Stack.Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
