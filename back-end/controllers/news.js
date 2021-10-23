///const dataPost = require('../util/dataPost');
const News = require('../news/news');
const imageProgress = require('../util/imageProcess');

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

module.exports = {createNews};
