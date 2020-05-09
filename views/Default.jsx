
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
                    <header>
                    <div className="container">
                    
                    <a href="/books">HOME</a>
                    <a href="/books/new">ADD NEW BOOK</a>
                    
                    </div>
                    </header>
                    <div>
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