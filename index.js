const express = require('express');

const app = express();

app.get('/', (_, res) => res.status(200).json({ message: 'Hello Azure!!' }));

app.listen(3000, () => console.log('Server running on port 3000'));