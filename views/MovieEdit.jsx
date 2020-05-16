
const React = require('react');
const Default = require('./Default');

class MovieEdit extends React.Component {
    render() {
        const { _id, title, description, rating, genre, yearReleased, img, price, qty } = this.props.movie;
        return (
            <Default>
            <div className="container">
                <h1>Edit Your Movie</h1>
                <div className="form-group">
                <form action={`/movies/${_id}?_method=PUT`} method="POST">
                  Title: <input type="text" name="title" id="title" defaultValue={title}/><br/>
                  Description: <input type="text" name="description" id="description" defaultValue={description}/><br/>
                  Image URL: <input type="text" name="img" id="img" defaultValue={`${img}`}/><br/>
                  Rating: <input type="text" name="rating" id="rating" defaultValue={rating}/><br/>
                  Genre: <input type="text" name="genre" id="genre" defaultValue={genre}/><br/>
                  Year Released: <input type="text" name="yearReleased" id="yearReleased" defaultValue={yearReleased}/><br/>
                  Price: <input type="text" name="price" id="price"  defaultValue={price}/><br/>
                  Qty: <input type="text" name="qty" id="qty" defaultValue={qty}/><br/>
                  <input id="update" type="submit" name="" value="UPDATE MOVIE"/>
                </form>
                </div>
            </div>
            </Default>
        )
    }
}

module.exports = MovieEdit;
