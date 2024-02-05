const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server is running on Port 5000. Welcome to my Node.js server");
}
);