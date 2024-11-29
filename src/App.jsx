import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import ActionBar from "./components/ActionBar";
import Footer from "./components/Footer";
import Main from "./components/Main";
import MovieGallery from "./components/MoviesGallery";
import { Container } from "react-bootstrap";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Container fluid className="bg-dark text-light min-vh-100">
        <MyNavbar />
        <ActionBar />
        <Main>
          <MovieGallery />
        </Main>
        <Footer />
      </Container>
    </>
  );
}

export default App;
