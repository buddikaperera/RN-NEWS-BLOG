import React from 'react';

///drawings apps.diagrams.net
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
//import BlockCard from './app/components/BlockCard';
import FeaturedNews from './app/components/FeaturedNews';
import Screen from './app/components/Screen';
import SearchBar from './app/components/SearchBar';

const App = () => {
  return (
    <View style={styles.container}>
      <Screen>
        <SearchBar />
        <FeaturedNews />
      </Screen>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ece5dd',
  },
});

export default App;
