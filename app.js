const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const connectDB = require('./config/db');
const achievementRoutes = require('./routes/achievements');

const app = express();

connectDB();

app.use(cors({
    origin : 'http://localhost:3000'
}));

app.use(express.json());

//Routes

app.use('/achievement/', achievementRoutes)

// OLD ROUTES

// const createData = (name, category, date) => {
//     return { name, category, date };
// }

// const achievementData = [
//     createData("1st Place in Running Event", "Athletics", "2023-04-20"),
//     createData("2nd Place in Singing Contest", "Singing", "2021-02-19"),
//     createData("3rd Place in Music Event", "Music", "2023-11-23"),
//     createData("Passed Term Test", "School", "2023-01-10"),
//     createData("Passed IT Course", "Software Development", "2023-11-13"),
//     createData("2nd Place in Running Event", "Athletics", "2023-03-13"),
//     createData("Went to NASA", "Astronomy", "2023-08-13"),
//     createData("Went to Ferrari Company", "Automobile", "2024-08-13"),
// ];

// const user = {
//     name : 'Batman (Backend Test Name)',
//     school : 'Central College, Colombo',
//     dob : 'January 3rd, 2009',
//     email : 'tharindu@gmail.com',
//     description : 'I am a programming enthusiast!',
//     hobby : '',
//     hometown : '',
//     age : '',
//     phone : '0112222222',
//     ambition : ''
// };

// const villageInfo = {
//     name: "Dehiwala",
//     title: "My Hometown",
//     description: "Dehiwala-Mount Lavinia (Sinhala: දෙහිවල-ගල්කිස්ස, romanized: Dehivala-Galkissa; Tamil: தெஹிவளை-கல்கிசை, romanized: Tehivaḷai-Kalkicai), population 245,974 (2012), is a large municipality in Sri lanka, and covers an extent of 2,109 ha (5,210 acres). It lies south of the Colombo Municipal Council area and separated from it by the Dehiwala canal which forms the northern boundary of DMMC. Its southern limits lie in Borupana Road and the eastern boundary is Weras Ganga with its canal system and including some areas to its east (Pepiliyana, Gangodawila and Kohuwala). This town has extensive population and rapid industrialisation and urbanization in recent years. It is home to Sri Lanka's National Zoological Gardens, which remains one of Asia's largest. Colombo South Teaching Hospital, Kalubowila and Colombo Airport, Ratmalana are some important landmark in this area. Dehiwela-Mount Lavinia and Sri Jayawardenapura Kotte being two large suburban centres of the city of Colombo function together as one large urban agglomeration in the Region (Western Province). The overspill from the City in residential and commercial uses of land have rapidly urbanised these suburban centers. Dehiwela-Mount Lavinia and Sri Jayawardenpaura along with Colombo Municipal Council form the most urbanised part of the core area of the Colombo Metropolitan Region. Dehiwala and Mount Lavinia lie along the Galle Road artery, which runs along the coast to the south of the country.",
//     gallery: [
//         { id: 1, imageUrl: 'https://www.discover.lk/assets/Dehiwala-Zoological-Garden2.jpg', caption: 'Beauty of Dehiwala' },
//         { id: 2, imageUrl: 'https://i.ytimg.com/vi/E5WoVTAjcSs/maxresdefault.jpg', caption: 'Welcome to Dehiwala' },
//         { id: 3, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Sri_Lanka_%28560056969%29.jpg/800px-Sri_Lanka_%28560056969%29.jpg', caption: 'A Glance of Dehiwala' },
//     ],
//     map : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63383.18112512491!2d79.83774567915762!3d6.836669472582263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25a8d6ec1f8c3%3A0x47810f3e7d084753!2sDehiwala-Mount%20Lavinia!5e0!3m2!1sen!2slk!4v1704726674169!5m2!1sen!2slk"
// }

// const schoolImages = [
//     "https://freepngclipart.com/download/building/74392-building-school-cartoon-free-transparent-image-hq.png",
//     "https://s.tmimgcdn.com/scr/1204x1146/144100/school-education-building-illustration_144126-original.jpg",
//     "https://static.vecteezy.com/system/resources/previews/000/669/078/original/a-school-building-background.jpg"
// ];

// app.get( '/get_user',  (req, res) => {
//     res.send(user);
// }
// );

// app.get( '/get_village_data',  (req, res) => {
//     res.send(villageInfo);
// }
// );

// app.get( '/get_school_data',  (req, res) => {
//     res.send(schoolImages);
// }
// );

// const school = {
//     name : 'Ananda College',
//     website : 'www.anandacollege.com',
//     email : 'anandacoolege@gmail.com',
//     description : 'My school is situated at Colombo.',
//     phone : '0112222222',
//     mySchoolAddress : 'Colombo 10',
//     since : '1818',
// };

// app.get( '/get_school_details',  (req, res) => {
//     res.send(school);
// }
// );

// const aboutMeData = [
//     {
//         name : "Sandun Nawarathna",
//         expertise : "Hobbies : HTML, C#, Processing, React",
//         description : "Hi my name is Sandun Nawarathna. I am a Software Developer.",
//     },
//     {
//         name : "Sahan Sulakshana Silva",
//         expertise : "Expertise : HTML, C#, Processing, React",
//         description : "Hi my name is Sahan Sulakshana Silva. I am a Software Developer.",
//     },
//     {
//         name : "Rusira Samarasekara",
//         expertise : "Expertise : HTML, C#, Processing, React",
//         description : "Hi my name is Rusira Samarasekara. I am a Software Developer. ",
//     },

// ];

// app.get( '/get_about_me',  (req, res) => {
//     res.send(aboutMeData);
// }
// );

// app.get( '/what_is_your_school',  (req, res) => {
//     res.send('My School is Ananda College');
// }
// );

// app.get( '/what_is_your_age',  (req, res) => {
//     res.send('My age is 18 years');
// }
// );

// app.get( '/what_is_your_favourite_food',  (req, res) => {
//     res.send('My favourite food is Pizza');
// }
// );


// app.get( '/get_achievements',  (req, res) => {
//     res.send(achievementData);
// }
// );



module.exports = app;