const express = require('express');
const app = express();

const routes = require('express').Router();

routes.get('/', (req, res, next) => {
    res.json('Alfred Biden');
});

// const port = process.event.PORT || 3000


app.use('/', require('./routes'));


app.listen(3000, () => {
        console.log(`Server is running on port 3000`)
});
