const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

//MongoDB should be connected here

app.use(express.json());

//Routes

const user = {
    name : 'Tharindu Nanayakkara',
    school : 'Central College, Colombo',
    dob : 'January 3rd, 2009',
    email : 'tharindu@gmail.com',
    description : 'I am a programming enthusiast!',
    hobby : '',
    hometown : '',
    age : '',
    phone : '0112222222',
    ambition : ''
};

app.get( '/get_user',  (req, res) => {
    res.send(user);
}
);

const school = {
    name : 'Ananda College',
    website : 'www.anandacollege.com',
    email : 'anandacoolege@gmail.com',
    description : 'My school is situated at Colombo.',
    phone : '0112222222',
    mySchoolAddress : 'Colombo 10',
    since : '1818',
};

app.get( '/get_school_details',  (req, res) => {
    res.send(school);
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