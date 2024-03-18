const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

const app = express();

//MongoDB should be connected here

app.use(cors({
    origin : 'http://localhost:3000'
}));

app.use(express.json());

//Routes

const createData = (name, category, date) => {
    return { name, category, date };
}

const achievementData = [
    createData("1st Place in Running Event", "Athletics", "2023-04-20"),
    createData("2nd Place in Singing Contest", "Singing", "2021-02-19"),
    createData("3rd Place in Music Event", "Music", "2023-11-23"),
    createData("Passed Term Test", "School", "2023-01-10"),
    createData("Passed IT Course", "Software Development", "2023-11-13"),
    createData("2nd Place in Running Event", "Athletics", "2023-03-13"),
    createData("Went to NASA", "Astronomy", "2023-08-13"),
    createData("Went to Ferrari Company", "Automobile", "2024-08-13"),
];

const user = {
    name : 'Batman (Backend Test Name)',
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


app.get( '/get_achievements',  (req, res) => {
    res.send(achievementData);
}
);

module.exports = app;