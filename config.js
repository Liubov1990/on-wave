const path = require('path');

const STATIC_PATH = path.join(__dirname + '/client');
const VIEWS_PATH = path.join(path.join(__dirname, 'views'));
const REGISTER_PARTIALS = __dirname + '/views/partials';

const PORT = 4000;

module.exports = {
  STATIC_PATH,
  VIEWS_PATH,
  REGISTER_PARTIALS,
  PORT
};
