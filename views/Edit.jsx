
const React = require('react');
const Default = require('./Default');

class Edit extends React.Component {
    render() {
        const { _id, title, author, description, rating, genre, pages, img, price, qty } = this.props.book;
        return (
            <Default>
            <div className="container">
                <h1>Edit Your Book</h1>
                <div className="form-group">
                <form action={`/books/${_id}?_method=PUT`} method="POST">
                  Title: <input type="text" name="title" id="title" defaultValue={title}/><br/>
                  Author: <input type="text" name="author" id="author" defaultValue={author}/><br/>
                  Description: <input type="text" name="description" id="description" defaultValue={description}/><br/>
                  Image URL: <input type="text" name="img" id="img" defaultValue={`${img}`}/><br/>
                  Rating: <input type="text" name="rating" id="rating" defaultValue={rating}/><br/>
                  Genre: <input type="text" name="genre" id="genre" defaultValue={genre}/><br/>
                  Pages: <input type="text" name="pages" id="pages" defaultValue={pages}/><br/>
                  Price: <input type="text" name="price" id="price"  defaultValue={price}/><br/>
                  Qty: <input type="text" name="qty" id="qty" defaultValue={qty}/><br/>
                  <input id="update" type="submit" name="" value="UPDATE BOOK"/>
                </form>
                </div>
            </div>
            </Default>
        )
    }
}

module.exports = Edit;
