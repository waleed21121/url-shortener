const router = require('express').Router();

const urlSchema = require('../models/urlSchema.js'); // get the schema of url

/* GET home page. */
router.get('/', async function (req, res, next) {
    const urls = await urlSchema.find({});
    res.locals.allUrl = urls;
    res.render('index', { title: 'Express' });
});

module.exports = router;
