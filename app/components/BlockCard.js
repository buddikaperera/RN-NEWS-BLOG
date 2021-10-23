import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import SubTitle from './SubTitle';
import Title from './Title';

const BlockCard = ({style}) => {
  return (
    <View style={[styles.container, style]}>
      <Image
        source={require('../assets/images/img.jpg')}
        style={styles.imgContainer}
      />
      <View style={styles.contentContainer}>
        <Title>
          If you are preparing to appear for a Java and C++ Framework related
          certification exam, then this section is a must for you. This section
          simulates a real online test along with a given timer which challenges
          you to complete the test within a given time-frame. Finally you can
          check your overall test score and how you fared among millions of
          other candidates who attended this online test.
        </Title>

        <SubTitle>
          If you are preparing to appear for a Java and C++ Framework related
          certification exam, then this section is a must for you. This section
          simulates a real online test along with a given timer which challenges
          you to complete the test within a given time-frame. Finally you can
          check your overall test score and how you fared among millions of
          other candidates who attended this online test.
        </SubTitle>
      </View>
    </View>
  );
};

export default BlockCard;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 300,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#ece5dd',
  },

  imgContainer: {
    width: '100%',
    height: 200,
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 12,
  },
  contentContainer: {
    padding: 5,
  },
});
