/*
const express = require('express');
const path = require('path');
const exphbs  = require('express-handlebars');
const PORT = process.env.PORT || 5000;



express()
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.render('pages/index'))
    .get('/index', (req, res) => res.render('pages/index'))
    .get('/contacts', (req, res) => res.render('pages/contacts'))
    .get('/services-and-prices', (req, res) => res.render('pages/services-and-prices'))
    .get('/photogallery', (req, res) => res.render('pages/photogallery'))
    .get('/discounts', (req, res) => res.render('pages/discounts'))
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))
*/

const express = require('express')
const exphbs  = require('express-handlebars');
const path = require('path')
const PORT = process.env.PORT || 5000

const app = express();

app.engine('.hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'main',
    partialsDir: "views/partials/",
    // Specify helpers which are only registered on this instance.
    /*helpers: {
        foo: function () { return 'FOO!'; },
        bar: function () { return 'BAR!'; }
    }*/
}));
app.set('view engine', '.hbs');

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => res.render('pages/index'));
app.get('/index', (req, res) => res.render('pages/index'));
app.get('/contacts', (req, res) => res.render('pages/contacts'));
app.get('/services-and-prices', (req, res) => res.render('pages/services-and-prices'));
app.get('/photogallery', (req, res) => res.render('pages/photogallery'));
app.get('/discounts', (req, res) => res.render('pages/discounts'));
// .get('/db', (req, res) => res.render('pages/db'))
app.listen(PORT, () => console.log(`App is running at http://localhost:${ PORT }`));
