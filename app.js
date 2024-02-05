const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

//MongoDB should be connected here

app.use(express.json());

//Routes

app.get( '/who_are_you',  (req, res) => {
    res.send('Hello world! I am Node.js. How are you! ');
}
);

app.get( '/what_is_your_name',  (req, res) => {
    res.send('Hello client. My name is John.');
}
);

app.get( '/what_is_your_school',  (req, res) => {
    res.send('My School is Ananda College');
}
);

app.get( '/what_is_your_age',  (req, res) => {
    res.send('My age is 18 years');
}
);

app.get( '/what_is_your_favourite_food',  (req, res) => {
    res.send('My favourite food is Pizza');
}
);

module.exports = app;