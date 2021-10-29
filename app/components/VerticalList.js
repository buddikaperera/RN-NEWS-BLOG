import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FlatCard from './FlatCard';
import Title from './common/Title';
import VerticalCard from './VerticalCard';
import {useNavigation} from '@react-navigation/core';
import {NewsDetails} from 'app/components/NewsList';

const VerticalList = ({title, data}) => {
  const navigation = useNavigation();
  return (
    <View>
      {title && <Title>{title}</Title>}
      <View style={styles.container}>
        {data.map(item => (
          <VerticalCard
            item={item}
            key={item.id}
            onPress={() => navigation.navigate('NewsDetails', {item})}
          />
        ))}
      </View>
    </View>
  );
};

export default VerticalList;

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
});
