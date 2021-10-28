import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../components/screens/Home';
import NewsDetails from '../components/screens/NewsDetails';
import NewsList from '../components/screens/NewsList';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="NewsDetails" component={NewsDetails} />
      <Stack.Screen name="NewsList" component={NewsList} />
    </Stack.Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
