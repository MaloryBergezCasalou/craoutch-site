const express = require('express');
let app = express();
const {
    MongoClient
} = require('mongodb');

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

app.use(express.static(__dirname + '/../public'));
app.get('/', (req, res) => {
    res.sendFile('index.html');
});

let port = process.env.PORT || 3003;
app.listen(port, () => {
    console.log(`Lancement du serveur : http://localhost:${port}`)
});