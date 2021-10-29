import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import NewsApi from '../../api/NewsApi';
import BlockCard from './BlockCard';
import ViewMore from './ViewMore';
import {useNavigation} from '@react-navigation/core';
import { NewsList } from 'app/components\NewsList';

const {width} = Dimensions.get('window');

const SmallCard = ({item, onPress}) => {
  const navigation = useNavigation();

  const handleViewMore = async category => {
    const result = await NewsApi.getByCategory(category);
    navigation.navigate('NewsList', result);
  };

  if (item.type === 'viewMore') {
    return (
      <ViewMore
        style={styles.viewMore}
        onPress={() => handleViewMore(item.category)}
      />
    );
  }
  return (
    <View>
      <BlockCard
        onPress={onPress}
        item={item}
        style={styles.container}
        imageStyle={styles.image}
      />
    </View>
  );
};

export default SmallCard;

const styles = StyleSheet.create({
  container: {
    width: width / 2,
    marginRight: 15,
    height: 200,
  },
  image: {
    height: 100,
  },
  viewMore: {
    width: width / 2,

    height: 200,
  },
});
