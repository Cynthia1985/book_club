
const React = require('react');
const Default = require('./Default');

class Show extends React.Component {
    render() {
        const { book } = this.props;
        return (
            <Default>
            <div className="container">
                <div className="books">
                <h1>{book.title}</h1>
                <img src={book.img} alt={book.title}/>
                <p>Author: {book.author}</p>
                <p>Description: {book.description}</p>
                <p>Rating: {book.rating}</p>
                <p>Genre: {book.genre}</p>
                <p>Pages: {book.pages}</p>
                <p>Qty: {book.qty > 0 ? `${book.qty} remaining` : 'OUT OF STOCK'}</p>
                <p>Price: ${book.price}</p>
                <form action={`/books/${book.id}?_method=PUT`} method="POST">
                    <input id="buy" type="submit" value="BUY"/>
                </form>
                <form action={`/books/${book.id}?_method=DELETE`} method="POST">
                    <input id="delete" type="submit" value="DELETE"/>
                </form>
                </div>
                <nav class="main-nav">
                    <ul>
                    <li><a href={`/books/${book._id}/edit`}>EDIT BOOK</a></li>
                    <li><a href="/books/new">ADD BOOK</a></li>
                    </ul>
                </nav>
            </div>
            </Default>
        )
    }
}

module.exports = Show;