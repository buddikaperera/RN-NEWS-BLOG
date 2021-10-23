const fs = require('fs');
let news = require('./news.json');

const dataPost = (req, res, id) => {
  const createdPost = {
    id: id,
    title: req.body.title,
    content: req.body.content,
    category: req.body.category,
  };
  console.log('AAAAAAAAAAA', createdPost);

  //save(createdPost);
};

module.exports = dataPost;
