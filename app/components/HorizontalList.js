import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import SmallCard from './SmallCard';
import Title from './common/Title';

const HorizontalList = ({title, data}) => {
  return (
    <React.Fragment>
      <Title size={20}>{title}</Title>
      <View style={styles.listStyleView}>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <SmallCard item={item} />}
        />
      </View>
    </React.Fragment>
  );
};

export default HorizontalList;

const styles = StyleSheet.create({
  listStyleView: {
    marginVertical: 15,
  },
});
