
const React = require('react');

class Default extends React.Component {
    render() {
        return(
            <html>
                <head>
                <link href="https://fonts.googleapis.com/css2?family=Acme&family=Montserrat&display=swap" rel="stylesheet"></link>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"/>
                <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script> 
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script> 
                <link rel="stylesheet" href="/css/style.css"/>
                <title>Book Club</title>
                <nav class="main-nav">
                    <ul>
                        <li><a href="/index">HOME</a></li>
                        <li><a href="/books">BOOKS</a></li>
                        <li><a href="/movies">MOVIES</a></li>
                        <li><a href="/games">GAMES</a></li>
                    </ul>
                </nav>
                </head>
                <body>
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img className="d-block w-100" src="https://i.pinimg.com/originals/27/c3/41/27c341ea8d860408d0c6348930c55b5b.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=500"  alt="First slide"/>
                        </div>
                        <div className="carousel-item">
                        <img className="d-block w-100" src="https://previews.123rf.com/images/phanuchat/phanuchat1807/phanuchat180700069/105479538-kids-peeping-behind-placard-cute-little-children-on-background-template-for-advertising-brochure-you.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&h=500"  alt="Second slide"/>
                        </div>
                        <div className="carousel-item">
                        <img className="d-block w-100" src="https://images-na.ssl-images-amazon.com/images/I/81MttkQJ76L.png?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&h=500"  alt="Third slide"/>
                        </div>
                        <div className="carousel-item">
                        <img className="d-block w-100" src="https://previews.123rf.com/images/phanuchat/phanuchat1807/phanuchat180700069/105479538-kids-peeping-behind-placard-cute-little-children-on-background-template-for-advertising-brochure-you.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&h=500"  alt="Third slide"/>
                        </div>
                        </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                    </div>
                    {this.props.children}
                    <footer>
                        <p>By: Cynthia Espejo</p>
                    </footer>
                </body>
            </html>
        )
    }
}

module.exports = Default;