import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BlockCard from './BlockCard';

const FeaturedNews = ({item}) => {
  return (
    <View>
      <BlockCard item={item} style={{marginVertical: 15}} />
    </View>
  );
};

export default FeaturedNews;

const styles = StyleSheet.create({});
