
const React = require('react');
const Default = require('./Default');

class MovieShow extends React.Component {
    render() {
        const { movie } = this.props;
        return (
            <Default>
            <div className="container">
                <div className="books">
                <h1>{movie.title}</h1>
                <img src={movie.img} alt={movie.title}/>
                <p>Description: {movie.description}</p>
                <p>Rating: {movie.rating}</p>
                <p>Genre: {movie.genre}</p>
                <p>Year Released: {movie.yearReleased}</p>
                <p>Qty: {movie.qty > 0 ? `${movie.qty} remaining` : 'OUT OF STOCK'}</p>
                <p>Price: ${movie.price}</p>
                <form action={`/movies/${movie.id}?_method=PUT`} method="POST">
                    <input id="buy" type="submit" value="BUY"/>
                </form>
                <form action={`/movies/${movie.id}?_method=DELETE`} method="POST">
                    <input id="delete" type="submit" value="DELETE"/>
                </form>
                </div>
                <nav class="main-nav">
                    <ul>
                    <li><a href={`/movies/${movie._id}/edit`}>EDIT MOVIE</a></li>
                    <li><a href="/movies/movieNew">ADD MOVIE</a></li>
                    </ul>
                </nav>
            </div>
            </Default>
        )
    }
}

module.exports = MovieShow;