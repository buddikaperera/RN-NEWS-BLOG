import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FlatCard from './FlatCard';
import ViewMore from './ViewMore';
import {useNavigation} from '@react-navigation/core';
import NewsApi from '../../api/NewsApi';

const VerticalCard = ({item, onPress}) => {
  const navigation = useNavigation();

  const handleViewMore = async category => {
    const result = await NewsApi.getByCategory(category);
    navigation.navigate('NewsList', result);
  };

  if (item.type === 'viewMore') {
    return <ViewMore onPress={() => handleViewMore(item.category)} />;
  }

  return (
    <View>
      <FlatCard onPress={onPress} item={item} />
    </View>
  );
};

export default VerticalCard;

const styles = StyleSheet.create({});
