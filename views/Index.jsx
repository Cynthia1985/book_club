
const React = require('react');
const Default = require('./Default')

class Index extends React.Component {
    render() {
        const { books } = this.props;
        return (
            <Default>
            <div className="container">
                <h1>Welcome to The Kid's Book Club</h1>
                <p>Hello.<br/>I'm a librarian, and I can help you find a book.<br/>Give it a try!</p>
                <div className="container">
                    {
                        books.map((book, index) => {
                            return (
                                <div className="book-card">
                                    <a href={`/books/${book._id}`}>
                                        <img src={book.img} alt={book.title}/>
                                    </a>
                                    <a href={`/books/${book.id}`}>
                                        <h2>{book.title}</h2>
                                    </a>
                                    <h3>Price: ${book.price}</h3>
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

module.exports = Index;