import { Component } from "react";
import MovieGallery from "./MoviesGallery";
import SliderGallery from "./SliderGallery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class Main extends Component {
  render() {
    return (
      <div>
        <MovieGallery searchQuery="star wars" name="Star Wars Collection" />
        <MovieGallery searchQuery="harry potter" name="Harry Potter Collection" />
        <MovieGallery searchQuery="lord of the rings" name="Lord of the Rings Collection" />
        <SliderGallery />
      </div>
    );
  }
}
export default Main;
