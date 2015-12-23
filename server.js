var express = require('express');
app = express();
var bodyParser = require('body-parser');
var Model = require('./app/models/model');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;
var router = express.Router();

// Endpoints
router.route('/get')
  .get((req, res) => {
    res.json(Model.get());
  });

router.route('/post')
  .post((req, res) => {
    Model.post(req.body);
    res.end('OK');
  });

app.use('/api', router);
app.listen(port);
console.log('Using port ' + port);
