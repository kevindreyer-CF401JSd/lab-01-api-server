const express = require('express');
const app = express();

const authors = [{
    "name": "Author 1",
    "id": 1
  },
  {
    "name": "Author 2",
    "id": 2
  }];
const entries = [];

app.use(express.json());

app.get('/authors', (req, res) => {
    res.status(200).json(authors);
});
app.post('/authors', (req, res) => {
    authors.push(req.body);
    res.status(201).json(req.body);
});
app.put('/authors/:id', (req, res) => {
    authors.push(req.body);
    res.status(201).json(req.body);
});
app.delete('/authors/:id', (req, res) => {
    res.status(200).json(authors);
});



module.exports = {
    server: app,
    start: function (port) {
        const PORT = port || process.env.PORT || 3000;
        app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
    }
}