const express = require('express');
let app = express();

app.use(express.static(__dirname + '/../public'));
app.get('/', (req, res) => {
    res.sendFile('index.html');
});

let port = process.env.PORT || 3003;
app.listen(port, () => {
    console.log(`Lancement du server : http://localhost:${port}`)
});