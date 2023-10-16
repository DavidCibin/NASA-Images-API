const express = require('express');
const app = express();
const path = require('path');
const logger = require('morgan');

const port = process.env.PORT || 4000;

require('dotenv').config();

const apiRouter = require('./routes/nasa');
const cors = require('cors');

app.use(express.static(path.join(__dirname, 'build')));
app.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT']
}));
app.use(logger('dev'));
app.use(express.json());
app.use('/api', apiRouter);
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port, ()=> {
    console.log(`Express is listening on port ${port}.`)
});