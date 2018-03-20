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

app.post('/withdraw', (req, res) => {
  let accountNumber = Number(req.body.accountNumber);
  let withdrawAmount = Number(req.body.withdrawAmount);
  db.withdraw(accountNumber, withdrawAmount, (account) => {
    account? res.json(account) : res.sendStatus(404);
  });
});

app.post('/deposit', (req, res) => {
  let accountNumber = Number(req.body.accountNumber);
  let depositAmount = Number(req.body.depositAmount);
  db.deposit(accountNumber, depositAmount, (account) => {
    account? res.json(account) : res.sendStatus(404);
  });
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
