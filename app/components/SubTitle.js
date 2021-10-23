import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SubTitle = ({children, numberOfLines = 2, size = 15}) => {
  return (
    <View>
      <Text numberOfLines={numberOfLines} style={{fontSize: size}}>
        {children}
      </Text>
    </View>
  );
};

export default SubTitle;

const styles = StyleSheet.create({});
