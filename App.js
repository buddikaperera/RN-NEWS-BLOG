import React from 'react';

///drawings apps.diagrams.net
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import BreakingNews from './app/components/BreakingNews';
import EntertainmentNews from './app/components/EntertainmentNews';
//import BlockCard from './app/components/BlockCard';
import FeaturedNews from './app/components/FeaturedNews';
import FlatCard from './app/components/FlatCard';
import PoliticalNews from './app/components/PoliticalNews';
import Screen from './app/components/Screen';
import SearchBar from './app/components/SearchBar';
import SmallCard from './app/components/SmallCard';
import TechNews from './app/components/TechNews';
import data from './fakeData';

const App = () => {
  const breakingNews = data.filter(item => item.category === 'breaking-news');
  const techNews = data.filter(item => item.category === 'tech');
  const politicalNews = data.filter(item => item.category === 'political');
  const entertainmentNews = data.filter(
    item => item.category === 'entertainment',
  );

  return (
    <View style={styles.container}>
      <Screen>
        <SearchBar />
        <FeaturedNews
          item={{
            id: '8',
            title: 'This is the title no eight.',
            desc: 'Desc is the short form of description and this format is the actual same as our real database.',
            thumbnail: 'http://lorempixel.com/400/200/',
          }}
        />

        <BreakingNews data={breakingNews} />
        <TechNews data={techNews} />
        <PoliticalNews data={politicalNews} />
        <EntertainmentNews data={entertainmentNews} />
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
