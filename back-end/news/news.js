const fs = require('fs');

class News {
  constructor(filename = 'news.json') {
    this.path = `./data/${filename}`;

    try {
      fs.readdirSync('data');
    } catch (error) {
      fs.mkdirSync('data');
    }

    try {
      fs.accessSync(this.path);
    } catch (error) {
      fs.writeFileSync(this.path, '[]');
    }
  }

  createId() {
    const id = new Date().getTime().toString();
    return id;
  }

  async create(data, id, imageName) {
    const totalData = JSON.parse(await fs.promises.readFile(this.path));

    //const id = this.createId();
    console.log('id', id);
    totalData.push({
      ...data,
      id,
      thumbnail: `http://192.168.8.100:4000/${imageName}`,
    });

    await fs.promises.writeFile(this.path, JSON.stringify(totalData, null, 2));
  }

  async getAll() {
    console.log('path', this.path);
    return JSON.parse(await fs.promises.readFile(this.path));
  }

  async searchPosts(query) {
    try {
      const data = await this.getAll();
      return data.filter(news =>
        news.title.toLowerCase().includes(query.toLowerCase()),
      );
    } catch (error) {
      console.log('Error while searching post.');
    }
  }

  async getSingle(id) {
    const data = await this.getAll();
    return data.find(news => news.id === id);
  }

  async getByCategory(category) {
    const data = await this.getAll();
    return data.filter(news => news.category === category);
  }
}

module.exports = News;
