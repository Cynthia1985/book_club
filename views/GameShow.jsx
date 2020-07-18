
const React = require('react');
const Default = require('./Default');

class GameShow extends React.Component {
    render() {
        const { game } = this.props;
        return (
            <Default>
            <div className="container">
                <div className="books">
                <h1>{game.title}</h1>
                <img src={game.img} alt={game.title}/>
                <p>Description: {game.description}</p>
                <p>Founded: {game.founded}</p>
                <p>Qty: {game.qty > 0 ? `${game.qty} remaining` : 'OUT OF STOCK'}</p>
                <p>Price: ${game.price}</p>
                <form action={`/games/${game.id}?_method=PUT`} method="POST">
                    <input id="buy" type="submit" value="BUY"/>
                </form>
                <form action={`/games/${game.id}?_method=DELETE`} method="POST">
                    <input id="delete" type="submit" value="DELETE"/>
                </form>
                </div>
                <nav className="main-nav">
                    <ul>
                    <li><a href={`/games/${game._id}/edit`}>EDIT GAME</a></li>
                    <li><a href="/games/gameNew">ADD GAME</a></li>
                    </ul>
                </nav>
            </div>
            </Default>
        )
    }
}

module.exports = GameShow;