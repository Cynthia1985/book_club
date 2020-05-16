
const React = require('react');
const Default = require('./Default');

class GameIndex extends React.Component {
    render() {
        const { games } = this.props;
        return (
            <Default>
            <div className="container">
                <h1>Kid's Game Index Page<br/>
                Look for a Game</h1>
                <div className="row">
                    {
                        games.map((game, index) => {
                            return (
                                <div className="book-card">
                                    <a href={`/games/${game._id}`}>
                                        <img src={game.img} alt={game.title}/>
                                    </a>
                                    <h2>{game.title}</h2>
                                    <h3>{game.founded}</h3>
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

module.exports = GameIndex;