
const React = require('react');
const Default = require('./Default');

class GameNew extends React.Component {
    render() {
      return (
          <Default>
          <div className="container">
              <h1>Create a New Game</h1>
              <div className="form-group">
              <form action="/games" method="POST">
                  Title: <input type="text" name="title" id="title" /><br/>
                  Description: <input type="text" name="description"  id="description" /><br/>
                  Image URL: <input type="text" name="img" id="img" /><br/>
                  Founded: <input type="text" name="founded" id="founded" /><br/>
                  Price: <input type="text" name="price" id="price" required placeholder="Must be greater than 0" /><br/>
                  Qty: <input type="text" name="qty" id="qty" /><br/>
                  <input id="add" type="submit" name="" value="ADD GAME"/>
               </form>
               </div>
          </div>
          </Default>
        );
    }
}

module.exports = GameNew;  