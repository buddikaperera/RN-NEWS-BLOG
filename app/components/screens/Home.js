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
import ActivityIndicator from '../common/ActivityIndicator';

const Home = () => {
  const [
    featuredNews,
    breakingNews,
    politicalNews,
    techNews,
    entertainmentNews,
    loading,
  ] = useNews();
  return (
    <React.Fragment>
      <ActivityIndicator visible={loading} />
      <Screen>
        <SearchBar />
        <FeaturedNews item={featuredNews} />
        <BreakingNews data={breakingNews} />
        <PoliticalNews data={politicalNews} />
        <TechNews data={techNews} />
        <EntertainmentNews data={entertainmentNews} />
      </Screen>
    </React.Fragment>
  );
};

export default Home;

const styles = StyleSheet.create({});
