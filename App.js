import {NavigationContainer} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import AppNavigator from './app/navigation/AppNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
