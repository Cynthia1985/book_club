
const React = require('react');
const Default = require('./Default');

class BookIndex extends React.Component {
    render() {
        const { books } = this.props;
        return (
            <Default>
            <div className="container">
                <h1>Kid's Book Index Page<br/>
                Look for a Book!</h1>
                <div className="row">
                    {
                        books.map((book, index) => {
                            return (
                                <div className="book-card">
                                    <a href={`/books/${book._id}`}>
                                        <img src={book.img} alt={book.title}/>
                                    </a>
                                    <h2>{book.title}</h2>
                                    <h3>{book.author}</h3>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            </Default>
        )
    }
}

module.exports = BookIndex;