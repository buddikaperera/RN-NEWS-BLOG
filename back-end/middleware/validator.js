const {check, validationResult} = require('express-validator');

const exceptedCategory = ['entertainment', 'political', 'tech'];

const validator = [
  check('title').trim().not().isEmpty().withMessage('Title is required'),
  check('content').trim().not().isEmpty().withMessage('Content is required'),
  check('category').isIn(exceptedCategory).withMessage('Category is required'),
];

const result = (req, res, next) => {
  const result = validationResult(req);

  const hasError = !result.isEmpty();

  if (hasError) {
    const error = result.array()[0].msg;
    res.json({success: false, message: error});
  }
  next();
};

const validateFile = (req, res, next) => {
  const expectedFileType = ['png', 'jpg', 'jpeg'];

  if (!req.file) {
    return res.json({success: false, message: 'Image is required !'});
  }

  const fileExtension = req.file.mimetype.split('/').pop();

  if (!expectedFileType.includes(fileExtension)) {
    return res.json({success: false, message: 'Invalid file type !'});
  }
  next();
};

module.exports = {validator, result, validateFile};
