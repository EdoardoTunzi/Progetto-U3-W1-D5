import { Component } from "react";
import { Container, Row } from "react-bootstrap";

class MovieGallery extends Component {
  state = {
    movies: []
  };

  getMovies = async () => {
    fetch(`http://www.omdbapi.com/?apikey=286931b4&s=${this.props.searchQuery}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((movies) => {
        //console.log(movies);
        this.setState({ movies: movies.Search });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    return (
      <Container fluid className="mb-4">
        <h5>{this.props.name}</h5>
        <Row className="g-2">
          {this.state.movies.map((movie) => {
            return (
              <div key={movie.imdbID} className="col-6 col-sm-4 col-md-2">
                <img className="img-fluid movie-poster" src={movie.Poster} alt={movie.Title} />
              </div>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default MovieGallery;
