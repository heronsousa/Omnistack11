const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.send("EAE, MEU BRABO!");
});

app.listen(3333);