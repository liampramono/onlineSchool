const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongo = require('mongodb');
const mongoose = require('mongoose');
const port = process.env.PORT || 4001;
const classes = require('./routes/classes');

// const routes = require('/routes/index');
// const users = require('/routes/user');

const app = express();
app.use('/', classes);



// app.use('/', routes);
// app.use('/users', users);
// app.use('/classes', classes);

app.listen(port, () => console.log(`Listening on the post ${port}`));