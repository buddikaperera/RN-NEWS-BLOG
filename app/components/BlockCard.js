import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const BlockCard = () => {
  return (
    <View>
      <Image
        source={require('../assets/images/img.jpg')}
        style={styles.imgContainer}
      />
    </View>
  );
};

export default BlockCard;

const styles = StyleSheet.create({
  imgContainer: {
    width: '100%',
    height: 200,
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 12,
  },
});
