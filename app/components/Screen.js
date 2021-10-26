import React from 'react';
import {StyleSheet, Text, View, StatusBar, ScrollView} from 'react-native';

const Screen = ({children}) => {
  return <ScrollView style={styles.container}>{children}</ScrollView>;
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    paddingHorizontal: 10,
    backgroundColor: '#ece5dd',
    flex: 1,
  },
});
