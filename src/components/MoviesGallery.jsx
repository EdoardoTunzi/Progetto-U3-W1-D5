import { Component } from "react";
import { Container } from "react-bootstrap";

class MovieGallery extends Component {
  render() {
    console.log(this.props);

    return (
      <Container className="container-fluid mb-4">
        <h5>{this.props.name}</h5>
        <div className="row g-1">
          {this.props.genre.map((movie) => {
            return (
              <div key={movie.imdbID} className="col-6 col-sm-4 col-md-2">
                <img className="img-fluid" src={movie.Poster} alt={movie.Title} />
              </div>
            );
          })}
        </div>
      </Container>
    );
  }
}

export default MovieGallery;
