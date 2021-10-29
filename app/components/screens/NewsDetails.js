import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import NewsApi from '../../../api/NewsApi';
import Close from '../common/Close';

import HorizontalList from '../HorizontalList';
import {useNavigation} from '@react-navigation/core';
import ActivityIndicator from '../common/ActivityIndicator';

const {width, height} = Dimensions.get('window');

const NewsDetails = ({route}) => {
  const navigation = useNavigation();
  const [news, setNews] = useState({});
  const [relatedNews, setRelatedNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const {id: postId, category: postCategory} = route.params.item;

  const fetchPost = async () => {
    setLoading(true);
    try {
      const result = await NewsApi.getSinglePost(postId);
      setNews(result);
    } catch (error) {
      console.log('Error fetchPost' + error.message);
    }
    setLoading(false);
  };

  const fetchRelatedNews = async postCategory => {
    setLoading(true);
    try {
      const result = await NewsApi.getByCategory(postCategory, 6);
      setRelatedNews(result.filter(item => item.id !== postId));
    } catch (error) {
      console.log('Error fetchRelatedNews' + error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPost();
    fetchRelatedNews(postCategory);
  }, []);

  const {title, content, thumbnail} = news;

  return (
    <React.Fragment>
      <ActivityIndicator visible={loading} />
      <ScrollView style={styles.container}>
        <Image style={styles.image} source={{uri: thumbnail}} />
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.content}>{content}</Text>
        </View>
        <View style={styles.relatedPostContainer}>
          <HorizontalList title="Related Posts" data={relatedNews} />
        </View>
      </ScrollView>
      <Close onPress={() => navigation.popToTop()} />
    </React.Fragment>
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
  relatedPostContainer: {
    padding: 10,
  },
});
