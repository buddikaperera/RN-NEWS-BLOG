const express = require('express');

const router = express.Router();

const uploads = require('../middleware/multer'); //multer({storage});

const {
  createNews,
  getAllNews,
  getSingleNews,
  getNewsByCategory,
  searchPosts,
} = require('../controllers/news');

const {validator, result, validateFile} = require('../middleware/validator');

//const {validator, result} = require('../middleware/validator');

//const sharp = require('sharp');

//const multer = require('multer');

//const fs = require('fs');

//const imageProgress = require('../util/imageProcess');
///const dataPost = require('../util/dataPost');
//const News = require('../news/news');

//const storage = multer.memoryStorage();

const id = new Date().getTime().toString();

//const uploads = require('../middleware/multer'); //multer({storage});

router.post(
  '/create',
  uploads.single('thumbnail'),
  validator,
  result,
  validateFile,
  createNews,
);

router.get('/news', getAllNews);
router.get('/news/single/:id', getSingleNews);
router.get('/news/:category/:qty?', getNewsByCategory);
router.post('/news/search/:query', searchPosts);

module.exports = router;
