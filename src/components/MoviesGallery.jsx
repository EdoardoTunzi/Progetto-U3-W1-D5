import { Component } from "react";
import { Alert, Container, Row, Spinner } from "react-bootstrap";

class MovieGallery extends Component {
  state = {
    movies: [],
    isLoading: false,
    hasError: false,
    errorMessage: ""
  };

  getMovies = async () => {
    this.setState({ isLoading: true });

    fetch(`http://www.omdbapi.com/?apikey=286931b4&s=${this.props.searchQuery}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error in fetching data from API");
        }
      })
      .then((movies) => {
        //console.log(movies);
        this.setState({ movies: movies.Search });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ hasError: true, errorMessage: error.message });
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    return (
      <Container fluid className="mb-4">
        <h5>{this.props.name}</h5>
        {this.state.isLoading && (
          <Spinner animation="border" role="status" variant="danger" className="d-block mx-auto my-3">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
        <Row className="g-2">
          {this.state.hasError && <Alert variant="danger">{this.state.errorMessage ? this.state.errorMessage : "Error in getting data"}</Alert>}
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
