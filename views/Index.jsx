
const React = require('react');
const Default = require('./Default');

class Index extends React.Component {
    render() {
        return (
            <Default>
            <div className="container">
                <h1>Kid's Entertainment App</h1>
                <div className="card-body">
                <div className="book-index"> 
                    <a href="/books"><h1>BOOKS</h1></a>
                </div>
                </div>
                <div className="card-body">
                <div className="movie-index">
                    <a href="/movies"><h1>MOVIES</h1></a>
                </div>
                </div>
                <div className="card-body">
                <div className="game-index">
                    <a href="/games"><h1>GAMES</h1></a>
                </div>
                </div>
            </div>
            <footer>
            </footer>
            </Default>
         )
    }
}

module.exports = Index;