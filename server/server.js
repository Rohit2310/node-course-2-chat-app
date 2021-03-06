const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');
var port = process.env.PORT || 3329;
var app = express();

app.use(express.static(publicPath));

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});