import React from 'react';
import {StyleSheet, Text, View, StatusBar, ScrollView} from 'react-native';
import VerticalList from '../VerticalList';

const NewsList = ({route}) => {
  const data = route.params;
  const header = data[0].category.split('-').join(' ').toUpperCase();
  return (
    <React.Fragment>
      <View style={styles.headerContainer}>
        <Text style={styles.categoryTitle}>{header}</Text>
      </View>
      <ScrollView contentContainerStyle={{padding: 15}}>
        <VerticalList data={data} />
      </ScrollView>
    </React.Fragment>
  );
};

export default NewsList;

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: StatusBar.currentHeight,
    backgroundColor: 'black',
  },
  categoryTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: 'white',
  },
});
