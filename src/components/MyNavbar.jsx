import { Container, Dropdown, Image, Nav, Navbar } from "react-bootstrap";
import { BellFill, List, Search } from "react-bootstrap-icons";

const MyNavbar = () => {
  return (
    <Navbar expand="md" bg="dark" variant="dark" className="mb-4">
      <Container fluid>
        {/* Logo */}
        <Navbar.Brand href="#">
          <img src="../public/assets/img/netflix_logo.png" height="40" alt="Netflix Logo" className="me-3" />
        </Navbar.Brand>

        {/* Dropdown Mobile */}
        <Dropdown className="d-md-none">
          <Dropdown.Toggle variant="outline-light" className="text-white fs-5">
            <List size={20} color="white" />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#">Home</Dropdown.Item>
            <Dropdown.Item href="#">TV Shows</Dropdown.Item>
            <Dropdown.Item href="#">Movies</Dropdown.Item>
            <Dropdown.Item href="#">Recently Added</Dropdown.Item>
            <Dropdown.Item href="#">My List</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {/* Navbar Items */}
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto d-none d-md-flex">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">TV Shows</Nav.Link>
            <Nav.Link href="#" className="active">
              Movies
            </Nav.Link>
            <Nav.Link href="#">Recently Added</Nav.Link>
            <Nav.Link href="#">My List</Nav.Link>
          </Nav>

          {/* Right Side Icons */}
          <div className="d-flex align-items-center">
            <span className="mx-1">
              <Search size={20} color="white" />
            </span>
            <span className="d-none d-md-block mx-1 small">KIDS</span>
            <span className="mx-1">
              <BellFill size={20} color="white" />
            </span>

            {/* Avatar Dropdown */}
            <Dropdown align="end">
              <Dropdown.Toggle variant="link" className="text-decoration-none text-white p-0">
                <Image src="../public/assets/img/avatar.png" height="30" alt="Avatar image" />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="./profile.html">Profile</Dropdown.Item>
                <Dropdown.Item href="#">Settings</Dropdown.Item>
                <Dropdown.Item href="#">Log Out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
