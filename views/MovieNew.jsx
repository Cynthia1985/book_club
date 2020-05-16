
const React = require('react');
const Default = require('./Default');

class MovieNew extends React.Component {
    render() {
      return (
          <Default>
          <div className="container">
              <h1>Create a New Movie</h1>
              <div className="form-group">
              <form action="/movies" method="POST">
                  Title: <input type="text" name="title" id="title" /><br/>
                  Description: <input type="text" name="description"  id="description" /><br/>
                  Image URL: <input type="text" name="img" id="img" /><br/>
                  Rating: <input type="text" name="rating" id="rating" /><br/>
                  Genre: <input type="text" name="genre" id="genre" /><br/>
                  Year Released: <input type="text" name="yearReleased" id="yearReleased" /><br/>
                  Price: <input type="text" name="price" id="price" required placeholder="Must be greater than 0" /><br/>
                  Qty: <input type="text" name="qty" id="qty" /><br/>
                  <input id="add" type="submit" name="" value="ADD MOVIE"/>
               </form>
               </div>
          </div>
          </Default>
        );
    }
}

module.exports = MovieNew;  