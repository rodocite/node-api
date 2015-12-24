var express = require('express');
app = express();
var bodyParser = require('body-parser');
var Name = require('./models/Name');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;
var router = express.Router();

// Endpoints
router.route('/get')
  .get((req, res) => {
    Name.findAll({
      attributes: ['id', 'name']
    })
    .then(names => res.json({data: names}));
  });

router.route('/post')
  // TODO: Handling req.body on null/error submissions
  .post((req, res) => {
    var TODO = req.body || 'default';
    Name.create(TODO).then(post => {
      res.json(TODO);
    });
  });

app.use('/api', router);
app.listen(port);
console.log('Using port ' + port);
