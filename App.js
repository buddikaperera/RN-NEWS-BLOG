import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Screen from './app/components/Screen';
import NewsApi from './api/NewsApi';

import SearchBar from './app/components/SearchBar';
import FeaturedNews from './app/components/FeaturedNews';
import BreakingNews from './app/components/BreakingNews';
import EntertainmentNews from './app/components/EntertainmentNews';
import PoliticalNews from './app/components/PoliticalNews';
import TechNews from './app/components/TechNews';
import useNews from './app/hooks/useNews';

const App = () => {
  const [
    featuredNews,
    breakingNews,
    politicalNews,
    techNews,
    entertainmentNews,
  ] = useNews();
  return (
    <Screen>
      <SearchBar />
      <FeaturedNews item={featuredNews} />
      <BreakingNews data={breakingNews} />
      <PoliticalNews data={politicalNews} />
      <TechNews data={techNews} />
      <EntertainmentNews data={entertainmentNews} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
