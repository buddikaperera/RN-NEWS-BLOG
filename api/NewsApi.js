import api from './api';

const getAll = async () => {
  try {
    const response = await api.get('/news');

    if (response.data.success) {
      return response.data.news;
    }
  } catch (error) {
    return [];
    console.log('Error getting all news ', error.message);
  }
};

const getSinglePost = async id => {
  try {
    const response = await api.get(`news/single/${id}`);

    if (response.data.success) {
      return response.data.news;
    }
  } catch (error) {
    return [];
    console.log('Error getting all news ', error.message);
  }
};

const getByCategory = async (category, qty) => {
  const endpoint = qty ? `/news/${category}/${qty}` : `/news/${category}`;
  try {
    const response = await api.get(endpoint);

    if (response.data.success) {
      return response.data.news;
    }
  } catch (error) {
    return [];
    console.log('Error getting all categories news ', error.message);
  }
};

export default {
  getAll,
  getByCategory,
  getSinglePost,
};
