
////////////////////////////////////////////////////////////////////////////
// Book Club
////////////////////////////////////////////////////////////////////////////

// dependecies
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Index = require('./models/index.js')
const Book = require('./models/books.js');
const Game = require('./models/games.js');
const Movie = require('./models/movies.js');
const methodOverride = require('method-override');
const PORT = process.env.PORT || 3000
const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/books'

// middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(methodOverride('_method'));

// moongose connection
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});

// index
app.get('/index', (req, res) => {
    Index.find({}, (error, justIndex) => {
        res.render('Index', {
            index: justIndex
        });
    });
});

// game
// index
app.get('/games', (req, res) => {
    Game.find({}, (error, allGames) => {
        res.render('GameIndex', {
            games: allGames
        });
    });
});

// new
app.get('/games/gameNew', (req, res) => {
    res.render('GameNew');
});

// create
app.post('/games/', (req, res) => {
    Game.create(req.body, (error, createdGame) => {
        // once created - respond to client
        res.redirect('/games');
    });
});

// show
app.get('/games/:id', (req, res) => {
    // find the specific document
    Game.findById(req.params.id, (error, foundGame) => {
        // render the show route and pass it the foundbook
        res.render('GameShow', {
            game: foundGame
        });
    });
});

// delete
app.delete('/games/:id', (req, res) => {
    // Delete document from collection
    Game.findByIdAndRemove(req.params.id, (error, game) => {
        res.redirect('/games');
    });
});

// edit
app.get('/games/:id/edit', (req, res) => {
    // Find our document from collection - using mongoose model
    Game.findById(req.params.id, (error, foundGame) => {
        // render the edit view and pass it the found book
        res.render('GameEdit', {
            game: foundGame
        });
    });
});

// put
app.put('/games/:id', (req, res) => {
    // Update the log document using our model
    Game.findByIdAndUpdate(req.params.id, req.body, { new: true }, (error, updatedModel) => {
        res.redirect('/games');
    });
});

// buy
app.put('/games/:id/buy', (req, res) => {
    Game.findById(req.params.id, (error, game) => {
        game.qty -= 1;
        Game.findByIdAndUpdate(req.params.id, book, (error, updatedGame) => {
          res.redirect(`/games/${req.params.id}`);
        });
    });
});

// movie
// index
app.get('/movies', (req, res) => {
    Movie.find({}, (error, allMovies) => {
        res.render('MovieIndex', {
            movies: allMovies
        });
    });
});

// new
app.get('/movies/movieNew', (req, res) => {
    res.render('MovieNew');
});

// create
app.post('/movies/', (req, res) => {
    Movie.create(req.body, (error, createdMovie) => {
        // once created - respond to client
        res.redirect('/movies');
    });
});

// show
app.get('/movies/:id', (req, res) => {
    // find the specific document
    Movie.findById(req.params.id, (error, foundMovie) => {
        // render the show route and pass it the foundbook
        res.render('MovieShow', {
            movie: foundMovie
        });
    });
});

// delete
app.delete('/movies/:id', (req, res) => {
    // Delete document from collection
    Movie.findByIdAndRemove(req.params.id, (error, movie) => {
        res.redirect('/movies');
    });
});

// edit
app.get('/movies/:id/edit', (req, res) => {
    // Find our document from collection - using mongoose model
    Movie.findById(req.params.id, (error, foundMovie) => {
        // render the edit view and pass it the found book
        res.render('MovieEdit', {
            movie: foundMovie
        });
    });
});

// put
app.put('/movies/:id', (req, res) => {
    // Update the log document using our model
    Movie.findByIdAndUpdate(req.params.id, req.body, { new: true }, (error, updatedModel) => {
        res.redirect('/movies');
    });
});

// buy
app.put('/movies/:id/buy', (req, res) => {
    Movie.findById(req.params.id, (error, movie) => {
        movie.qty -= 1;
        Movie.findByIdAndUpdate(req.params.id, movie, (error, updatedMovie) => {
          res.redirect(`/movies/${req.params.id}`);
        });
    });
});

// book
// index
app.get('/books', (req, res) => {
    Book.find({}, (error, allBooks) => {
        res.render('BookIndex', {
            books: allBooks
        });
    });
});

// new
app.get('/books/bookNew', (req, res) => {
    res.render('BookNew');
});

// create
app.post('/books/', (req, res) => {
    Book.create(req.body, (error, createdBook) => {
        // once created - respond to client
        res.redirect('/books');
    });
});

// seed
// app.get('/books/seed', async (req, res) => {
//     const newBooks =
//       [
//         {
//           title: `If You Give a Mouse a Brownie`,
//           author: `Laura Numeroff`,
//           description: `From the #1 New York Times bestselling team of Laura Numeroff and Felicia Bond comes the ninth picture book in the blockbuster If You Give . . . series, one of the most beloved children’s series of all time.`,
//           img: `http://books.google.com/books/content?id=iKj5HAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api`,
//           rating: 3.5,
//           genre: `Juvenile Fiction`,
//           pages: 32,
//           price: 5,
//           qty: 9
//         }, {
//           title: `The Kids Book of Weather Forecasting`,
//           author: `Mark Breen,Kathleen Friestad,Michael Kline`,
//           description: `A hands-on introduction to the science of meteorology, explaining how to make equipment to measure rainfall, wind direction, and humidity, record measurements and observations in a weather log, make weather predictions, and perform other related activities.`,
//           img: `http://books.google.com/books/content?id=aOZZNQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api`,
//           rating: 0,
//           genre: `Juvenile Nonfiction`,
//           pages: 141,
//           price: 6,
//           qty: 0
//         }, {
//           title: 'The Bad Seed',
//           author: 'Jory John',
//           description: 'An Amazon Best Childrens Book of the Month from the New York Times bestselling author of the Goodnight Already! series This is a book about a bad seed. A baaaaaaaaaad seed.',
//           img: 'http://books.google.com/books/content?id=o7hWDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
//           rating: 4.5,
//           genre: 'Juvenile Fiction',
//           pages: 40,
//           price: 7,
//           qty: 10
//         }, {
//           title: 'The World Book Encyclopedia 2010',
//           author: 'World Book, Inc',
//           description: 'A 22-volume, highly illustrated, A-Z general encyclopedia for all ages, featuring sections on how to use World Book, other research aids, pronunciation key, a student guide to better writing, speaking, and research skills, and comprehensive index',
//           img: 'http://books.google.com/books/content?id=BCdolwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
//           rating: 3.5,
//           genre: 'Encyclopedias and dictionaries',
//           pages: 1001,
//           price: 60,
//           qty: 5
//         }, 
//       ]
// try {
//       const seedItems = await Book.create(newBooks)
//       res.send(seedItems)
//     } catch (err) {
//      res.send(err.message)
//     }
//     res.redirect('/books');
// });

// show
app.get('/books/:id', (req, res) => {
    // find the specific document
    Book.findById(req.params.id, (error, foundBook) => {
        // render the show route and pass it the foundbook
        res.render('BookShow', {
            book: foundBook
        });
    });
});

// delete
app.delete('/books/:id', (req, res) => {
    // Delete document from collection
    Book.findByIdAndRemove(req.params.id, (error, book) => {
        res.redirect('/books');
    });
});

// edit
app.get('/books/:id/edit', (req, res) => {
    // Find our document from collection - using mongoose model
    Book.findById(req.params.id, (error, foundBook) => {
        // render the edit view and pass it the found book
        res.render('BookEdit', {
            book: foundBook
        });
    });
});

// put
app.put('/books/:id', (req, res) => {
    // Update the log document using our model
    Book.findByIdAndUpdate(req.params.id, req.body, { new: true }, (error, updatedModel) => {
        res.redirect('/books');
    });
});

// buy
app.put('/books/:id/buy', (req, res) => {
    Book.findById(req.params.id, (error, book) => {
        book.qty -= 1;
        Book.findByIdAndUpdate(req.params.id, book, (error, updatedBook) => {
          res.redirect(`/books/${req.params.id}`);
        });
    });
});

// listen 
app.listen(PORT, () => {
    console.log('listening');
});

