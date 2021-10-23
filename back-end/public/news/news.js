const fs = require('fs');

class News {
  constructor(filename = 'news.json') {
    this.path = `../../data/${filename}`;

    try {
      fs.readdirSync('data');
    } catch (error) {
      console.log(error);
      fs.mkdirSync('');
    }

    try {
      fs.accessSync(this.path);
    } catch (error) {
      fs.writeFileSync(this.path, '[]');
    }
  }

  async create() {
    const totalData = JSON.parse(await fs.promises.readFile(this.path));
    console.log(totalData);
  }
}

module.exports = {create};
