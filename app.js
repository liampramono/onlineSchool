const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');
const mongoose = require('mongoose');
const port = process.env.PORT || 4001;
const config = require('./config/secret');

const classes = require('./routes/classes');


// const routes = require('/routes/index');
// const users = require('/routes/user');


// app.use('/', routes);
// app.use('/users', users);
// app.use('/classes', classes);

const app = express();

// Connect to the database before starting the application server.
mongodb.MongoClient.connect(config.mongodb, (err, database) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    console.log(config.mongodb);
    // Save database object from the callback for reuse.
    const db = database;
    console.log("Database connection ready");


    app.use('/', classes );
  
    // Initialize the app.
    app.listen(port, () => console.log(`Listening on the post ${port}`));
    
  });



