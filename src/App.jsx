import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import ActionBar from "./components/ActionBar";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Container fluid className="bg-dark text-light min-vh-100">
        <MyNavbar />
        <ActionBar />
        <Main />
        <Footer />
      </Container>
    </>
  );
}

export default App;
