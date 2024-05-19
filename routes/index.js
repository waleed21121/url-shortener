const router = require('express').Router();

const urlSchema = require('../models/urlSchema.js'); // get the schema of url

/* GET home page. */
router.get('/', async function (req, res, next) {
    const urls = await urlSchema.find({});
    res.locals.allUrl = urls;
    res.render('index', { title: 'Express' });
});

// Add new url and its Alias
router.post('/', async function (req, res, next) {

    const newUrlShortener = new urlSchema({

        originalUrl: req.body.urlInput, 
        shortUrl: req.body.aliasInput

    });

    await newUrlShortener.save();
    res.redirect(req.body.urlInput);
});
module.exports = router;
