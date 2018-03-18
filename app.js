const express = require('express');
const db = require('./db.js');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('resources'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/resources/index.html')
});

app.get('/view-account', async (req, res) => {
  let accountNumber = req.query.accountNumber;
  let accountDetails = await db.getAccountDetails(accountNumber);
  res.send(accountDetails);
});

app.post('/request-account', (req, res) => {
  console.log('User wants to request a new account with this info ', req.body);
  res.send('');
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
