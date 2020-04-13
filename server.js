'use strict';
require('dotenv').config();
const express = require('express');
const superagent = require('superagent');
const PORT = process.env.PORT || 4000;
const app = express();
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/hello', (req, res) => {
    res.render('pages/index')
});
app.get('/searches/new', newSearch);
function newSearch(request, response) {
    response.render('pages/searches/new');
}
app.get('/searches/show', renderForm);
app.post('/searches/show', findBook);
function renderForm(req, res) {
    res.render('pages/searches/new');
}
function findBook(req, res) {
    let url = `https://www.googleapis.com/books/v1/volumes?q=quilting`
    if (req.body.search === 'title') {
        url = `https://www.googleapis.com/books/v1/volumes?q=${req.body.search}:${req.body.keyword}`
    } else if (req.body.search === 'author') {
        url = `https://www.googleapis.com/books/v1/volumes?q=${req.body.search}:${req.body.keyword}`
    }
    return superagent.get(url)
        .then(data => {
            let books = data.body.items.map((element) => {
                return new Book(element)
            })
            res.render('pages/searches/show', { books: books })


        })
        .catch((err) => {
            errorHandler(err, req, res);
});
}
function Book(data) {
    this.authors = data.volumeInfo.authors;
    this.title = data.volumeInfo.title;
    this.description = data.volumeInfo.description;
    this.img_url = data.volumeInfo.imageLinks.thumbnail;
}
app.listen(PORT, () => console.log(`runing in port ${PORT}`))
/////////////////////////////////////////////////////////
app.use('*', notFoundHandler);

function notFoundHandler(req, res) {
    res.status(404).send('PAGE NOT FOUND');
  }
  function errorHandler(err, req, res) {
    res.status(500).render('pages/error', { error: err });
  }
