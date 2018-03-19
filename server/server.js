const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db/mogoose');
const { Todo } = require('./models/todo');
const { User } = require('./models/todo');

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
});
