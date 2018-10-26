const compression = require('compression');
const express = require('express');
const morgan = require('morgan');
const open = require('open');

const port = process.env.PORT || 3000
const app = express();

const endpointIp = '35.192.143.42';
const endpointPort = '80';

app.use(compression());
app.use(morgan('combined'));

app.get('/endpoint', function (req, res) {
  res.send({
    ip: process.env['OCTOHACK-BACK_SERVICE_HOST'] || endpointIp,
    port: process.env['OCTOHACK-BACK_SERVICE_PORT'] || endpointPort
  });
});

app.use('/', express.static('build'));

app.listen(port, function (err) {
    if (err) {
        // write error to log
    }
});
