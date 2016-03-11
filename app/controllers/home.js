var express = require('express'),
  router = express.Router();

  var titles = {
    'rememberize': 'Rememberize',
    'todaysholiday': 'Today\'s Holiday',
    'soundcloudcast': 'Soundcloudcast',
    'holidaybot': 'Holiday Bot',
    'homemade': "Homemade",
    'weatherapp': 'Weather App'
  };

module.exports = function (app) {
  app.use('/', router);
  app.use('/work', router);
};

router.get('/', function (req, res, next) {
    res.render('index', {
      title: 'Index'
    });
});

router.get('/work', function (req, res, next) {
    res.render('layouts/work/index', {
      title: 'Work'
    });
});

router.get('/work/:title', function (req, res, next) {
	var title = req.params.title;
    res.render('layouts/work/' + title, {
      'title': titles[title]
    });
});


router.get('/about', function (req, res, next) {
    res.render('layouts/about', {
      title: 'About'
    });
});