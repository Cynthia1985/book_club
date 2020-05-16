
const React = require('react');
const Default = require('./Default');

class GameEdit extends React.Component {
    render() {
        const { _id, title, description, img, founded, price, qty } = this.props.game;
        return (
            <Default>
            <div className="container">
                <h1>Edit Your Game</h1>
                <div className="form-group">
                <form action={`/games/${_id}?_method=PUT`} method="POST">
                  Title: <input type="text" name="title" id="title" defaultValue={title}/><br/>
                  Description: <input type="text" name="description" id="description" defaultValue={description}/><br/>
                  Image URL: <input type="text" name="img" id="img" defaultValue={`${img}`}/><br/>
                  Founded: <input type="text" name="founded" id="founded" defaultValue={founded}/><br/>
                  Price: <input type="text" name="price" id="price"  defaultValue={price}/><br/>
                  Qty: <input type="text" name="qty" id="qty" defaultValue={qty}/><br/>
                  <input id="update" type="submit" name="" value="UPDATE GAME"/>
                </form>
                </div>
            </div>
            </Default>
        )
    }
}

module.exports = GameEdit;
