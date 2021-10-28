import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BlockCard from './BlockCard';
import {useNavigation} from '@react-navigation/core';

const FeaturedNews = ({item}) => {
  const navigation = useNavigation();
  return (
    <View>
      <BlockCard
        onPress={() => navigation.navigate('NewsDetails')}
        item={item}
        style={{marginVertical: 15}}
      />
    </View>
  );
};

export default FeaturedNews;

const styles = StyleSheet.create({});
