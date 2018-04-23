const express = require('express');
const path = require('path');
const { URL, URLSearchParams } = require('url');
const app = express();
const axios = require('axios');
const amiiboUrl = new URL('http://www.amiiboapi.com/api/amiibo');

app.use(express.static(path.join(__dirname, 'dist')));
app.get('/', function(request, response) {
    response.sendFile(__dirname + '/dist/index.html');
});
app.get('/amiibo', async (req, res) => {
    const { character } = req.query;
    const searchParams = new URLSearchParams({ character });
    amiiboUrl.search = searchParams;
    try {
        const { data } = await axios.get(amiiboUrl.toString());
        res.send(data);
    } catch (e) {
        res.send({
            amiibo: []
        });
    }
});
app.listen(process.env.PORT || 8080);
