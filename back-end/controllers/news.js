///const dataPost = require('../util/dataPost');
const News = require('../news/news');
const imageProgress = require('../util/imageProcess');
const news = new News();

const createNews = async (req, res) => {
  //console.log('file');

  console.log('body', req.body);
  console.log('file', req.file);

  const news = new News();
  const id = news.createId();

  console.log('ccccccccccc', id);
  //await imageProgress(req, id);

  try {
    const imageName = await imageProgress(req, id);

    console.log('imageName', imageName);
    news.create(req.body, id, imageName);
    res.send('Submit Successful');
  } catch (error) {
    console.log('error  >>>' + error.message);
  }
};

const getAllNews = async (req, res) => {
  console.log('getAllNews');
  try {
    const data = await news.getAll();
    res.json({success: true, news: data});
  } catch (error) {
    res.json({
      success: false,
      message: 'Something went wrong, server error!',
    });
    console.log('Error while getting all news--->', error.message);
  }
};

const getSingleNews = async (req, res) => {
  try {
    const data = await news.getSingle(req.params.id);
    if (!data) {
      return res.json({
        success: false,
        message: 'Post not found!',
      });
    }

    res.json({
      success: true,
      news: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: 'Something went wrong, server error!',
    });
    console.log('Error while getting single news', error.message);
  }
};

const getNewsByCategory = async (req, res) => {
  try {
    const {category, qty} = req.params;
    const data = await news.getByCategory(category);
    if (!data) {
      return res.json({success: false, message: 'Posts not found!'});
    }

    if (qty) {
      return res.json({success: true, news: [...data].splice(0, qty)});
    }

    res.json({success: true, news: data});
  } catch (error) {
    res.json({
      success: false,
      message: 'Something went wrong, server error!',
    });
    console.log('Error while getting news by category!', error.message);
  }
};

const searchPosts = async (req, res) => {
  try {
    const {query} = req.params;
    if (query.trim()) {
      const response = await news.searchPosts(req.params.query);
      if (response.length === 0)
        return res.json({success: false, message: 'No match found..'});
      res.json({success: true, news: response});
    }

    res.json({success: false, message: 'No match found..'});
  } catch (error) {
    res.json({
      success: false,
      message: 'Something went wrong, server error!',
    });
    console.log(error);
  }
};

module.exports = {
  createNews,
  getAllNews,
  getSingleNews,
  getNewsByCategory,
  searchPosts,
};
