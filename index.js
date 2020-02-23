const express = require('express')
const exphbs  = require('express-handlebars');
const path = require('path');
const PORT = process.env.PORT || 5000;

const app = express();

app.engine('.hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'main',
    partialsDir: "views/partials/",
    helpers: {
        currentYear: function () { return new Date().getFullYear(); }
    }
}));
app.set('view engine', '.hbs');

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => res.render('pages/index'));
app.get('/index', (req, res) => res.render('pages/index'));
app.get('/contacts', (req, res) => res.render('pages/contacts'));
app.get('/prices', (req, res) => res.render('pages/prices'));
app.get('/photogallery', (req, res) => res.render('pages/photogallery'));
app.get('/discounts', (req, res) => res.render('pages/discounts'));
app.get('*', (req, res) => res.render('error-pages/404'));
// .get('/db', (req, res) => res.render('pages/db'))
app.listen(PORT, () => console.log(`App is running at http://localhost:${ PORT }`));
