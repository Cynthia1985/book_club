
const React = require('react');

class Default extends React.Component {
    render() {
        return(
            <html>
                <head>
                    <link rel="stylesheet" href="/css/style.css"/>
                    <title>Book Club</title>
                </head>
                <body>
                <div className="container">
                    <a href="/books">Home</a>
                    <a href="/books/new">Add New Book</a>
                    {this.props.children}
                </div>
                    <footer>
                    </footer>
                </body>
            </html>
        )
    }
}

module.exports = Default;