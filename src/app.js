const express = require('express');
const app = express();
const router = express.Router();

const productRoute = require('../src/routes/productRouter');

app.use('/product', productRoute);

app.use(express.urlencoded());

app.use(express.json());

module.exports = app;