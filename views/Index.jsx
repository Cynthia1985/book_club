
const React = require('react');
const Default = require('./Default')

class Index extends React.Component {
    render() {
        const { books } = this.props;
        return (
            <Default>
            <div className="container">
                <h1>Welcome to The Book Club</h1>
                <a href="/books/new">Add New Book</a>
                <div>
                    {
                        books.map((book, index) => {
                            return (
                                <div class="book-card">
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