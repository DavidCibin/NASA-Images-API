const express = require('express');
const app = express();
const path = require('path');
const logger = require('morgan');

const port = process.env.PORT || 3001;

require('dotenv').config();

const apiRouter = require('./routes/nasa');

const cors = require('cors');
const corsOptions = {
    origin: "https://nasa-images-api.onrender.com", // Replace this with your frontend domain
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, 'build')));
app.use(logger('dev'));
app.use(express.json());
app.use('/api', apiRouter);
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port, ()=> {
    console.log(`Express is listening on port ${port}.`)
});