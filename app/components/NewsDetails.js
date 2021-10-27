import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');
const NewsDetails = () => {
  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../app/assets/images/test.jpg')}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Heading</Text>
        <Text style={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat,
          officia, vel quam doloremque ab expedita, nostrum officiis quis quidem
          ipsum exercitationem obcaecati rem praesentium sed porro placeat vero
          iure est.
        </Text>
      </View>
    </ScrollView>
  );
};

export default NewsDetails;

const styles = StyleSheet.create({
  container: {},
  image: {width: width, height: height / 3},
  contentContainer: {
    padding: 10,
  },
  title: {fontSize: 20, fontWeight: 'bold', marginBottom: 10},
  content: {fontSize: 16, color: '#4e4d4d'},
});
