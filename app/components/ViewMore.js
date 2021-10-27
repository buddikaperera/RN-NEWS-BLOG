import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ViewMore = ({style}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text}> View More</Text>
    </View>
  );
};

export default ViewMore;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: 'white',
    //width: '100%',
    //height: 50,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#7a74e0',
  },
});
