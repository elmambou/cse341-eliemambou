const express = require('express');
const bodyParser = require('body-parser');


const port = process.env.PORT || 8080;
const app = express();

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', require('./routes'));

    app.listen(8080);
    console.log(`Connected to DB and listening on 8080`);
