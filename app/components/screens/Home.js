import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import useNews from '../../hooks/useNews';
import BreakingNews from '../BreakingNews';
import EntertainmentNews from '../EntertainmentNews';
import FeaturedNews from '../FeaturedNews';
import PoliticalNews from '../PoliticalNews';
import Screen from '../Screen';
import SearchBar from '../SearchBar';
import TechNews from '../TechNews';

const Home = () => {
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

export default Home;

const styles = StyleSheet.create({});
