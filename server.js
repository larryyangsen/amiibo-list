const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'dist')));
app.get('/', function(request, response) {
    response.sendFile(__dirname + '/dist/index.html');
});
app.listen(8080);
