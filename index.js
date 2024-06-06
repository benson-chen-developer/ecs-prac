const express = require('express');

const app = express();

app.listen(5001, () => console.log("Running on port 5001"));

app.get('/', (req, res) => res.json("My api is running!"))