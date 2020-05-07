
const React = require('react');
const Default = require('./Default')

class Show extends React.Component {
    render() {
        const { book } = this.props;
        return (
            <Default>
            <div className="container">
                <div class="book-show">
                <a href="/books">Go Back</a>
                <h1>{book.title}</h1>
                <h3><a href={`/books/${book._id}/edit`}>Edit this Book</a></h3>
                <img src={book.img} alt={book.title}/>
                <p>Author: {book.author}</p>
                <p>Description: {book.description}</p>
                <p>Rating: {book.rating}</p>
                <p>Genre: {book.genre}</p>
                <p>Pages: {book.pages}</p>
                <h3>Qty: {book.qty > 0 ? `${book.qty} remaining` : 'OUT OF STOCK'}</h3>
                <h3>Price: ${book.price}</h3>
                <form action={`/books/${book.id}?_method=PUT`} method="POST">
                    <input id="buy" type="submit" value="BUY"/>
                </form>
                <form action={`/books/${book.id}?_method=DELETE`} method="POST">
                    <input id="delete" type="submit" value="DELETE"/>
                </form>
                </div>
            </div>
            </Default>
        )
    }
}

module.exports = Show;