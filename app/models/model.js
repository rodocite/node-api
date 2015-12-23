var fakeDB = {
  'default': 'This is will always be here'
};

var model = {
  get: () => fakeDB,

  post: argument => {
    var key = Object.keys(argument)[0];
    fakeDB[key] = argument[key];
  }
};

module.exports = model;
