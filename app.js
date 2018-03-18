const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('resources'));

app.get('/', (req, res) => res.sendFile(__dirname + '/resources/index.html'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
