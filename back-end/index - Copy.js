//const {application} = require('express');
const express = require('express');
////https://medium.com/@pojotorshemi/building-restful-apis-including-crud-operations-with-node-js-and-express-js-792c0c9c049b
///https://theonlytutorials.com/node-js-express-crud-example-storing-data-in-json-file/

///https://www.geeksforgeeks.org/how-to-add-unique-id-to-each-record-in-your-local-custom-database-in-node-js/

////https://www.geeksforgeeks.org/how-to-read-and-write-json-file-using-node-js/

const app = express();
//this line is required to parse the request body
app.use(express.json());

//const bodyParser = require('body-parser');
const fs = require('fs');
let news = require('./data/news.json');

//var News = require('./news/news');

const newsRouter = require('./router/news');

app.use(express.static('public')); ///load the index.html file

app.use(newsRouter);

//const news= News('./data/news.json');

//news
const PORT = 4000;

//app.get('/', (req, res) => {
//res.send('React native  back-end ');
//});

const save = async (createdPost, id) => {
  news.push(createdPost);
  await fs.promises.writeFile(
    './data/news.json',
    JSON.stringify(news, null, 2),
    error => {
      if (error) {
        throw error;
      }
    },
  );
};

app.get('/states', (req, res) => {
  res.json(usStates);
});

app.post('/states', (req, res) => {
  // usStates.push(req.body);

  const userData = req.body;

  const id = new Date().getTime().toString();

  // var id = parseInt(req.body.Timeid);
  //// userData.push({...userData, id}),

  const createdPost = {
    id: id,
    title: req.body.title,
    content: req.body.content,
    category: req.body.category,
  };
  console.log(createdPost);

  save(createdPost);
  res.json({
    status: 'success',
    stateInfo: createdPost, //userData,
  });
});

app.listen(PORT, () => {
  console.log('App is listening on port ' + PORT);
});
