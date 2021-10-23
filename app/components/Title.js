import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Title = ({children, numberOfLines = 2, size = 16}) => {
  return (
    <View>
      <Text
        numberOfLines={numberOfLines}
        style={{fontWeight: 'bold', fontSize: size}}>
        {children}
      </Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({});
