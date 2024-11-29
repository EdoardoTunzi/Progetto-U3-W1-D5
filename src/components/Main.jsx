import { Component } from "react";
import MovieGallery from "./MoviesGallery";

class Main extends Component {
  render() {
    return (
      <div>
        <MovieGallery search="star wars" name="Star Wars Collection" />
        <MovieGallery search="indiana jones" name="Indiana Jones Collection" />
        <MovieGallery search="lord of the rings" name="Lord of the Rings Collection" />
      </div>
    );
  }
}
export default Main;
