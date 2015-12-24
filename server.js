var express = require('express');
app = express();
var bodyParser = require('body-parser');
var Names = require('./models/Names');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;
var router = express.Router();

// Endpoints
router.route('/get')
  .get((req, res) => {
    Names.findAll({
      attributes: ['id', 'name']
    })
    .then(names => res.json(names));
  });

router.route('/post')
  .post((req, res) => {
    var TODO = req.body || 'default';
    Names.sync().then(() => {
      Names.create(TODO).then(post => {
        res.json(TODO);
      })
    })
  });

app.use('/api', router);
app.listen(port);
console.log('Using port ' + port);
