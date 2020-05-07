
////////////////////////////////////////////////////////////////////////////
// Book Club
////////////////////////////////////////////////////////////////////////////

// dependecies
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Book = require('./models/books.js');
const User = require('./models/user.js');
const methodOverride = require('method-override');

// middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(methodOverride('_method'));

// moongose connection
mongoose.connect('mongodb://localhost:27017/books', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});

// index
app.get('/books', (req, res) => {
    Book.find({}, (error, allBooks) => {
        res.render('Index', {
            books: allBooks
        });
    });
});

// new
app.get('/books/new', (req, res) => {
    res.render('New');
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
//           Title: `If You Give a Mouse a Brownie`,
//           Author: `Laura Numeroff`,
//           Description: `From the #1 New York Times bestselling team of Laura Numeroff and Felicia Bond comes the ninth picture book in the blockbuster If You Give . . . series, one of the most beloved children’s series of all time.`,
//           Img: `http://books.google.com/books/content?id=iKj5HAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api`,
//           Rating: 3.5,
//           Genre: `Juvenile Fiction`,
//           Pages: 32,
//           Price: 5,
//           Qty: 9
//         }, {
//           Title: `The Kids Book of Weather Forecasting`,
//           Author: `Mark Breen,Kathleen Friestad,Michael Kline`,
//           Description: `A hands-on introduction to the science of meteorology, explaining how to make equipment to measure rainfall, wind direction, and humidity, record measurements and observations in a weather log, make weather predictions, and perform other related activities.`,
//           Img: `http://books.google.com/books/content?id=aOZZNQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api`,
//           Rating: 0,
//           Genre: `Juvenile Nonfiction`,
//           Pages: 141,
//           Price: 6,
//           Qty: 0
//         }, {
//           Title: 'The Bad Seed',
//           Author: 'Jory John',
//           Description: 'An Amazon Best Childrens Book of the Month from the New York Times bestselling author of the Goodnight Already! series This is a book about a bad seed. A baaaaaaaaaad seed.',
//           Img: 'http://books.google.com/books/content?id=o7hWDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
//           Rating: 4.5,
//           Genre: 'Juvenile Fiction',
//           Pages: 40,
//           Price: 7,
//           Qty: 10
//         }, {
//           Title: 'The World Book Encyclopedia 2010',
//           Author: 'World Book, Inc',
//           Description: 'A 22-volume, highly illustrated, A-Z general encyclopedia for all ages, featuring sections on how to use World Book, other research aids, pronunciation key, a student guide to better writing, speaking, and research skills, and comprehensive index',
//           Img: 'http://books.google.com/books/content?id=BCdolwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
//           Rating: 3.5,
//           Genre: 'Encyclopedias and dictionaries',
//           Pages: 1001,
//           Price: 60,
//           Qty: 5
//         }, {
//           Title: 'Drowned Wednesday (The Keys to the Kingdom, Book 3)',
//           Author: 'Garth Nix',
//           Description: 'On the third day, there were PIRATES! Arthur Penhaligon finds himself on an adventure that will pit him against pirates, storms, explosions and a vast beast that eats everything it encounters. ',
//           Img: 'http://books.google.com/books/content?id=G3Ir4LLc2E4C&printsec=frontcover&img=1&zoom=1&source=gbs_api',
//           Rating: 4.5,
//           Genre: 'Juvenile Fiction',
//           Pages: 400,
//           Price: 16,
//           Qty: 4
//         }, {
//           Title: 'How to Trick the Tooth Fairy',
//           Author: 'Erin Danielle Russell',
//           Description: 'From the coauthor of Dork Diaries comes a witty and engaging picture book about a prankster who wants to pull off the best prank of all—pranking the Tooth Fairy! ',
//           Img: 'http://books.google.com/books/content?id=jGBEDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
//           Rating: 0,
//           Genre: 'Juvenile Fiction',
//           Pages: 40,
//           Price: 3,
//           Qty: 8
//         }, {
//           Title: 'My No No No Day',
//           Author: 'Rebecca Patterson',
//           Description: 'Readers will say, Yes, yes, yes! From the moment Bella wakes up, her day goes wrong. She hates her breakfast egg, she wont share, she has a hurting foot, her supper is too hot, and her bath is too cold. And then its no, no, no to bedtime. ',
//           Img: 'http://books.google.com/books/content?id=T8iACwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
//           Rating: 3.5,
//           Genre: 'Juvenile Fiction',
//           Pages: 32,
//           Price: 8,
//           Qty: 1
//         }, {
//           Title: 'The All-New Book of Lists for Kids',
//           Author: 'Sandra Choron,Harry Choron',
//           Description: 'Offers numerous lists of fun, factual, and trivial issues, such as discontinued ice cream flavors and most popular websites for kids, along with "netiquette" tips, helpful references, and more. Original.',
//           Img: 'http://books.google.com/books/content?id=P-Iajvv12V0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
//           Rating: 0,
//           Genre: 'Juvenile Nonfiction',
//           Pages: 407,
//           Price: 16,
//           Qty: 7
//         }, {
//           Title: 'Potato Pants!',
//           Author: 'Laurie Keller',
//           Description: 'A potato and his eggplant nemesis struggle to find the perfect pants in this hilarious, heartwarming tale of forgiveness by bestselling Geisel-Award winning creator Laurie Keller. Potato is excited because today—for one day only—',
//           Img: 'http://books.google.com/books/content?id=T8RtDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
//           Rating: 3,
//           Genre: 'Juvenile Fiction',
//           Pages: 40,
//           Price: 4,
//           Qty: 5
//         }, {
//           Title: 'Marcos Cinco de Mayo',
//           Author: 'Lisa Bullard',
//           Description: 'Marco loves the food, parades, and fun of Cinco de Mayo. This year hes one of the dancers. As he listens to the mariachi music, Marco thinks of the brave Mexicans at the first Cinco de Mayo. Find out the different things people do to celebrate this holiday!',
//           Img: 'http://books.google.com/books/content?id=EgstDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
//           Rating: 3,
//           Genre: 'Juvenile Nonfiction',
//           Pages: 24,
//           Price: 2,
//           Qty: 10
//         }, {
//           Title: 'Bedtime Stories for Kids',
//           Author: 'Uncle Amon',
//           Description: 'Are you looking for a childrens book that is highly entertaining, great for early readers, and is jam-packed with bedtime stories? This childrens storybook has it all! This is an excellent read for beginning and early readers. Each story is easy to read and exciting with cute and bright illustrations for younger readers! This book is especially great for traveling, waiting rooms, and read aloud at home. ',
//           Img: 'http://books.google.com/books/content?id=TZ5DjgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
//           Rating: 0,
//           Genre: 'Juvenile Nonfiction',
//           Pages: 28,
//           Price: 8,
//           Qty: 3
//         }, {
//           Title: 'The Kids Book of the Night Sky',
//           Author: 'Ann Love,Heather Collins,Jane Drake',
//           Description: 'Introduces methods for observing the sky at night, the moon, the stars, constellations for each season, and the planets, recounts legends about the sky and the stars from many traditions, and suggests skywatching activities.',
//           Img: 'http://books.google.com/books/content?id=x5qiratOA-4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
//           Rating: 0,
//           Genre: 'Juvenile Nonfiction',
//           Pages: 144,
//           Price: 15,
//           Qty: 5
//         }, {
//           Title: 'Eat Your Peas',
//           Author: 'Kes Gray',
//           Description: 'Here comes trouble! A super-dooper picture book featuring the one and only Daisy! Daisy does NOT like peas. And there is NOTHING that will get her to eat them. Mum says she can have an extra pudding, a chocolate factory or a space rocket with double retro laser blammers - but it just wont work!',
//           Img: 'http://books.google.com/books/content?id=L66ENwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
//           Rating: 4,
//           Genre: 'Childrens stories',
//           Pages: 32,
//           Price: 9,
//           Qty: 3
//         }, {
//           Title: 'The Kids Book of Hand Lettering',
//           Author: 'Nicole Miyuki Santo',
//           Description: 'Create Pretty and Inspirational Hand Lettering Projects for Your Family, Friends, and Yourself! Hand lettering is making a comeback, spurred by platforms like Instagram and Pinterest. And not just adults are getting into hand lettering and calligraphy. ',
//           Img: 'http://books.google.com/books/content?id=DJlKDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
//           Rating: 0,
//           Genre: 'Juvenile Nonfiction',
//           Pages: 192,
//           Price: 26,
//           Qty: 2
//         }, {
//           Title: 'My Book about Me, by Me Myself',
//           Author: 'Dr. Seuss',
//           Description: 'The young reader may fill in the appropriate personal data to complete his "very own" autobiography.',
//           Img: 'http://books.google.com/books/content?id=6Bt1JonSpzwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
//           Rating: 4.5,
//           Genre: 'Juvenile Fiction',
//           Pages: 60,
//           Price: 8,
//           Qty: 9
//         }, {
//           Title: 'Charlie and the Chocolate Factory',
//           Author: 'Roald Dahl',
//           Description: 'Roald Dahls Charlie and the Chocolate Factory in glorious full colour. Mr Willy Wonka is the most extraordinary chocolate maker in the world. And do you know who Charlie is? Charlie Bucket is the hero. The other children in this book are nasty little beasts, called: Augustus Gloop - a great big greedy nincompoop; Veruca Salt - a spoiled brat; Violet Beauregarde - a repulsive little gum-chewer; Mike Teavee - a boy who only watches television. ',
//           Img: 'http://books.google.com/books/content?id=iaD7DAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
//           Rating: 4,
//           Genre: 'Juvenile Fiction',
//           Pages: 160,
//           Price: 20,
//           Qty: 13
//         },
//       ]
  
//     try {
//       const seedItems = await Book.create(newBooks)
//       res.send(seedItems)
//     } catch (err) {
//      res.send(err.message)
//     }
// });

app.get('/books/seed', async (req, res) => {
  const newBooks =
    [
      {
        title: `If You Give a Mouse a Brownie`,
        author: `Laura Numeroff`,
        description: `From the #1 New York Times bestselling team of Laura Numeroff and Felicia Bond comes the ninth picture book in the blockbuster If You Give . . . series, one of the most beloved children’s series of all time.`,
        img: `http://books.google.com/books/content?id=iKj5HAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api`,
        rating: 3.5,
        genre: `Juvenile Fiction`,
        pages: 32,
        price: 5,
        qty: 9
      },
    ]
    try {
            const seedItems = await Book.create(newBooks)
            res.send(seedItems)
          } catch (err) {
           res.send(err.message)
          }
});

// show
app.get('/books/:id', (req, res) => {
    // find the specific document
    Book.findById(req.params.id, (error, foundBook) => {
        // render the show route and pass it the foundbook
        res.render('Show', {
            book: foundBook
        });
    });
});

// user
app.get('/user/', (req, res) => {
  User.findById(req.params.id, (error, foundUser) => {
    res.render('Show', {user: foundUser});
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
        res.render('Edit', {
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
        User.shoppingCart ++;
        book.qty -= 1;
        Book.findByIdAndUpdate(req.params.id, book, (error, updatedBook) => {
          res.redirect('/books');
        });
    });
});

// listen 
app.listen(3000, () => {
    console.log('listening');
});

