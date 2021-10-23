import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BlockCard from './BlockCard';

const FeaturedNews = ({style}) => {
  return (
    <View>
      <BlockCard style={{marginVertical: 15}} />
    </View>
  );
};

export default FeaturedNews;

const styles = StyleSheet.create({});
