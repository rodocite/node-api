var express = require('express');
app = express();
var bodyParser = require('body-parser');

var mysql = require('mysql');
var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'node_api'
});

con.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;
var router = express.Router();

// Endpoints
router.route('/get')
  .get((req, res) => {
    con.query('SELECT * FROM names', function(err, rows) {
      res.json(rows);
    })
  });

router.route('/post')
  .post((req, res) => {
    if(!req.body.name) {
      res.json('Error');
      res.end('Error');
    } else {
      var name = req.body.name;
      con.query('INSERT INTO names SET ?', { 'name': name });
      res.end('OK');
    }
  });

app.use('/api', router);
app.listen(port);
console.log('Using port ' + port);
