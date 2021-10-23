import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Search here " style={styles.InputContainer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 55,
    backgroundColor: 'grey',
    borderRadius: 8,
    justifyContent: 'center',
  },
  InputContainer: {
    width: '100%',
    height: '100%',
    paddingLeft: 10,
    fontSize: 16,
  },
});

export default SearchBar;
