import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Screen from './app/components/Screen';
import NewsApi from './api/NewsApi';

const App = () => {
  const [featuredNews, setFeaturedNews] = useState({});
  const [BreakingNews, setBreakingNews] = useState([]);
  const [politicalNews, setPoliticalNews] = useState([]);
  const [techNews, setTechNews] = useState([]);
  const [entertainmentNews, setEntertainmentNews] = useState([]);

  const filterFeatured = data => {
    return [...data].filter(item => item.featured === 'on').reverse()[0];
  };

  const filterByCategory = (data, category) => {
    return [...data].filter(item => item.category === category);
  };

  const filterMultipleNews = async () => {
    const allNews = await NewsApi.getAll();
    // const featured = allNews
    //   .filter(item => item.featured === 'on')
    //   .reverse()[0];
    //setFeaturedNews(featured);
    setFeaturedNews(filterFeatured(allNews));
    setBreakingNews(filterByCategory(allNews, 'breaking-news'));
    setPoliticalNews(filterByCategory(allNews, 'political'));
    setTechNews(filterByCategory(allNews, 'tech'));
    setEntertainmentNews(filterByCategory(allNews, 'entertainment'));
  };

  useEffect(() => {
    filterMultipleNews();
  }, []);
  return (
    <Screen>
      <Text>{JSON.stringify(featuredNews)}</Text>
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
