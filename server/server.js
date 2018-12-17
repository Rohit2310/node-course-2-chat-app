const path = require('path');
const express = require('express');

const publiPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3329;
var app = express();

app.use(express.static(publiPath));

app.listen(3329, () => {
	console.log(`Server is up on port - ${port}`);
});