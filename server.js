var express = require('express');
app = express();
var bodyParser = require('body-parser');
var Name = require('./models/Name');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

// Endpoints
app.get('/names', (req, res) => {
  Name.findAll({
    attributes: ['id', 'name']
  })
  .then(names => res.json(names));
})

app.get('/names/:id', (req, res) => {
  var id = req.params.id;

  Name.findById(id)
  .then(name => res.json(name));
})

app.post('/names', (req, res) => {
  // TODO: Better req.body handling

  var TODO = req.body.name || 'default';
  Name.create({ name: TODO }).then(post => {
    res.json(post);
  });
});

app.put('/names/:id', (req, res) => {
  var newName = req.body.name;
  var id = req.params.id;

  Name.findById(id).then(name => {
    if(name) {
      name.updateAttributes({ name: newName });
    }

    res.json(name);
  });
});

app.delete('/names/:id', (req, res) => {
  var newName = req.body.name;
  var id = req.params.id;

  Name.findById(id).then(name => {
    if(name) {
      name.destroy();
    }
  });

  res.status(200);
})

app.listen(port);
console.log('Using port ' + port);
