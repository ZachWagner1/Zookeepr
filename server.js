const express = require('express');
const fs = require('fs');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const { animals } = require('./data/animals');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
// if client navigates to '<host>/api', use router set up in apiRoutes
app.use('/api', apiRoutes);
// if client navigates to '<host>/', use router set up in htmlRoutes
app.use('/', htmlRoutes);
// middleware to make static assets readily available, not gated behind a server endpoint
app.use(express.static('public'));

app.listen(PORT, () => {
	console.log(`API server now on port ${PORT}!`);
});