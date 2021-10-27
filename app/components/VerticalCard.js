import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FlatCard from './FlatCard';
import ViewMore from './ViewMore';

const VerticalCard = ({item}) => {
  if (item.type === 'viewMore') {
    return <ViewMore />;
  }

  return (
    <View>
      <FlatCard item={item} />
    </View>
  );
};

export default VerticalCard;

const styles = StyleSheet.create({});
