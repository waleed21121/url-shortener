const router = require('express').Router();

const urlSchema = require('../models/urlSchema.js'); // get the schema of url

// get website using its alias Url
router.get('/:aliasUrl', async (req, res) => {

    const urlCollection = await urlSchema.findOne({shortUrl :  req.params.aliasUrl});

    //console.log(urlCollection);

   res.redirect(urlCollection.originalUrl);

  });

/* GET home page. */
router.get('/', async function (req, res) {
    const urls = await urlSchema.find({});
    res.locals.allUrl = urls;
    res.render('index', { title: 'Express' });
});

// Add new url and its Alias
router.post('/', async function (req, res) {

    const newUrlShortener = new urlSchema({

        originalUrl: req.body.urlInput, 
        shortUrl: req.body.aliasInput

    });

    await newUrlShortener.save();
    res.redirect('/');
});

module.exports = router;
