//import express
const express = require('express');
//execute it
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');


/*Middlewares: function that executes when a route is being hit, can be used for authentication
app.use('/posts', () => {
    console.log('This is a middleware running');
});
*/
app.use(cors());
app.use(bodyParser.json());

//Import Routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

app.get('/', (req, res) => {
    res.send('We are on home');
});

//Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
 { useNewUrlParser: true },
 () => console.log("connected to DB")
 );

//How do we start listening to the server
app.listen(3000);