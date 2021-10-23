const fs = require('fs');
const sharp = require('sharp');

const imageProcess = async (req, id) => {
  //const formatedName = req.file.originalname.split(' ').join('-');

  // const fieName = `${id}-${req.file.originalname}`;

  fs.access('./data/uploads', err => {
    if (err) {
      fs.mkdirSync('./data/uploads'); ///${req.file.originalname}`);
    }
  });

  const formatedName = req.file.originalname.split(' ').join('-');
  const fieName = `${id}-${formatedName}`;

  try {
    await sharp(req.file.buffer)
      .resize({
        width: 615,
        height: 350,
      })
      .toFile(`./data/uploads/${fieName}`);
  } catch (error) {
    console.log('Error while processing image', error);
  }

  return fieName;
};

module.exports = imageProcess;
