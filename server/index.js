const compression = require('compression');
const express = require('express');
const morgan = require('morgan');
const open = require('open');

const port = 3001;
const app = express();

app.use(compression());
app.use(morgan('combined'));
app.use(express.static('build'));

app.listen(port, function (err) {
    if (err) {
        // write error to log
    } else {
        open(`http://localhost:${port}`);
    }
});
