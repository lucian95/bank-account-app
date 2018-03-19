const express = require('express');
const db = require('./db.js');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('resources'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/resources/index.html')
});

app.get('/view-account', (req, res) => {
  let accountNumber = Number(req.query.accountNumber);
  db.getAccount(accountNumber, (account) => {
    account? res.json(account) : res.sendStatus(404);
  });
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
