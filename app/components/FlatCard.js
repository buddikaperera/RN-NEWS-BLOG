import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import SubTitle from './SubTitle';
import Title from './common/Title';

const FlatCard = ({item}) => {
  const {thumbnail, desc, title} = item;

  return (
    <View style={styles.container}>
      <Image source={{uri: thumbnail}} style={styles.image} />
      <View style={styles.contentContainer}>
        <Title>{title}</Title>

        <SubTitle>{desc}</SubTitle>
      </View>
    </View>
  );
};

export default FlatCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 10,
    height: 80,
  },
  image: {
    flex: 0.35,
    height: '100%',
  },
  contentContainer: {
    flex: 0.65,
    paddingHorizontal: 5,
  },
});
