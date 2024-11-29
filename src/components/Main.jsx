import { Component } from "react";
import MovieGallery from "./MoviesGallery";

class Main extends Component {
  state = {
    gallery1: [],
    gallery2: [],
    gallery3: []
  };

  getMovies = async (searchQuery, stateNametoUpdate) => {
    fetch(`http://www.omdbapi.com/?apikey=286931b4&s=${searchQuery}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((movies) => {
        console.log(movies);
        this.setState({ ...this.state, [stateNametoUpdate]: movies.Search });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.getMovies("star wars", "gallery1");
    this.getMovies("indiana jones", "gallery2");
    this.getMovies("lord of the rings", "gallery3");
  }

  render() {
    console.log("questo è gallery one alla fine del fetch ", this.state.gallery1);
    console.log("questo è gallery 2 alla fine del fetch ", this.state.gallery2);
    console.log("questo è gallery 3 alla fine del fetch ", this.state.gallery3);
    return (
      <div>
        <MovieGallery name="Star Wars Collection" genre={this.state.gallery1} />
        <MovieGallery name="Indiana Jones Collection" genre={this.state.gallery2} />
        <MovieGallery name="Lord of the Rings Collection" genre={this.state.gallery3} />
      </div>
    );
  }
}
export default Main;
