
const React = require('react');
const Default = require('./Default');

class New extends React.Component {
    render() {
      return (
          <Default>
          <div className="container">
              <h1>Create a New Book</h1>
              <div className="form-group">
              <form action="/books" method="POST">
                  Title: <input type="text" name="title" id="title" /><br/>
                  Author: <input type="text" name="author" id="author" /><br/>
                  Description: <input type="text" name="description"  id="description" /><br/>
                  Image URL: <input type="text" name="img" id="img" /><br/>
                  Rating: <input type="text" name="rating" id="rating" /><br/>
                  Genre: <input type="text" name="genre" id="genre" /><br/>
                  Pages: <input type="text" name="pages" id="pages" /><br/>
                  Price: <input type="text" name="price" id="price" required placeholder="Must be greater than 0" /><br/>
                  Qty: <input type="text" name="qty" id="qty" /><br/>
                  <input id="add" type="submit" name="" value="ADD BOOK"/>
               </form>
               </div>
          </div>
          </Default>
        );
    }
}

module.exports = New;  