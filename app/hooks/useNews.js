import React, {useState, useEffect} from 'react';
import NewsApi from '../../api/NewsApi';

export default useNews = () => {
  const [featuredNews, setFeaturedNews] = useState({});
  const [breakingNews, setBreakingNews] = useState([]);
  const [politicalNews, setPoliticalNews] = useState([]);
  const [techNews, setTechNews] = useState([]);
  const [entertainmentNews, setEntertainmentNews] = useState([]);
  const qty = 5;

  const filterFeatured = data => {
    return [...data].filter(item => item.featured === 'on').reverse()[0];
  };

  const filterByCategory = (data, category) => {
    return [...data]
      .filter(item => item.category === category)
      .reverse()
      .splice(0, qty);
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

  return [
    featuredNews,
    breakingNews,
    politicalNews,
    techNews,
    entertainmentNews,
  ];
};
