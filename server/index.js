const compression = require('compression');
const express = require('express');
const morgan = require('morgan');
const open = require('open');

const port = process.env.PORT || 3000
const app = express();

const endpointIp = process.env['OCTOHACK-BACK_SERVICE_HOST'] || '35.192.143.42';
const endpointPort = process.env['OCTOHACK-BACK_SERVICE_PORT'] || '80';

app.use(compression());
app.use(morgan('combined'));

app.get('/endpoint', function (req, res) {
  res.send({
    ip: endpointIp,
    port: endpointPort
  });
});

app.use('/', express.static('build'));

app.listen(port, function (err) {
    if (err) {
        // write error to log
    }
});
