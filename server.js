const express = require('express');
const hbs = require('hbs');
const { VIEWS_PATH, STATIC_PATH, REGISTER_PARTIALS, PORT } = require('./config.js');

const arrivalsData = require('./data/arrivals.json');
const partnersData = require('./data/partners.json');
const heroData = require('./data/hero.json');
const navigationData = require('./data/navigation.json');
const socialIconsData = require('./data/socialIcons.json');

const dataJson = { arrivalsData, partnersData, heroData, navigationData, socialIconsData };

const app = express();

app.set('views', VIEWS_PATH);
app.set('view engine', 'hbs');

app.use(express.static(STATIC_PATH));

hbs.registerPartials(REGISTER_PARTIALS);

app.get('/', (req, resp) => {
  resp.render('index', dataJson);
});

app.listen(PORT, err => {
  if (err) {
    console.log(err);
  } else {
    console.log('Server is running!');
  }
});
