const fs = require('fs');
const path = require('path');
const express = require('express');
const { animals } = require('./data/animals.json');

const PORT = process.env.PORT || 3001;

const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
// provide css to html
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/animals', (req, res) => {
    res.sendFile(path.join(__dirname, './public/animals.html'));
});

app.get('/zookeepers', (req, res) => {
    res.sendFile(path.join(__dirname, './public/zookeepers.html'));
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});

// Next, we'll need to change all of the app routes to use router instead. 
// In every routing block in the code, change app to route. For example, 
// the GET route will look like this: 11.4.4