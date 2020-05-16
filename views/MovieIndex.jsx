
const React = require('react');
const Default = require('./Default');

class MovieIndex extends React.Component {
    render() {
        const { movies } = this.props;
        return (
            <Default>
            <div className="container">
                <h1>Kid's Movie Index Page<br/>
                Look for a Movie!</h1>
                <div className="row">
                    {
                        movies.map((movie, index) => {
                            return (
                                <div className="book-card">
                                    <a href={`/movies/${movie._id}`}>
                                        <img src={movie.img} alt={movie.title}/>
                                    </a>
                                    <h2>{movie.title}</h2>
                                    <h3>{movie.genre}</h3>
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

module.exports = MovieIndex;