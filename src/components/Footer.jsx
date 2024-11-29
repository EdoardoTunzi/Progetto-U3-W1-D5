import { Button, Col, Container, Row } from "react-bootstrap";
import { Facebook, Instagram, Twitter, Youtube } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <Container fluid className="bg-dark text-secondary mt-5 py-4">
      <Row className="justify-content-start">
        <Col xs={12} md={6} className="text-start mb-3">
          <Facebook size={30} className="text-secondary me-3" />
          <Instagram size={30} className="text-secondary me-3" />
          <Twitter size={30} className="text-secondary me-3" />
          <Youtube size={30} className="text-secondary" />
        </Col>
      </Row>
      <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 text-start">
        <Col className="mb-3 ">
          <p>
            <a href="#" className="text-secondary text-decoration-none">
              Audio and Subtitles
            </a>
          </p>
          <p>
            <a href="#" className="text-secondary text-decoration-none">
              Media Center
            </a>
          </p>
          <p>
            <a href="#" className="text-secondary text-decoration-none">
              Privacy
            </a>
          </p>
          <p>
            <a href="#" className="text-secondary text-decoration-none">
              Contact Us
            </a>
          </p>
        </Col>
        <Col className="mb-3">
          <p>
            <a href="#" className="text-secondary text-decoration-none">
              Audio Description
            </a>
          </p>
          <p>
            <a href="#" className="text-secondary text-decoration-none">
              Investor Relations
            </a>
          </p>
          <p>
            <a href="#" className="text-secondary text-decoration-none">
              Legal Notices
            </a>
          </p>
        </Col>
        <Col className="mb-3">
          <p>
            <a href="#" className="text-secondary text-decoration-none">
              Help Center
            </a>
          </p>
          <p>
            <a href="#" className="text-secondary text-decoration-none">
              Jobs
            </a>
          </p>
          <p>
            <a href="#" className="text-secondary text-decoration-none">
              Cookie Preferences
            </a>
          </p>
        </Col>
        <Col className="mb-3">
          <p>
            <a href="#" className="text-secondary text-decoration-none">
              Gift Cards
            </a>
          </p>
          <p>
            <a href="#" className="text-secondary text-decoration-none">
              Terms of Use
            </a>
          </p>
          <p>
            <a href="#" className="text-secondary text-decoration-none">
              Corporate Information
            </a>
          </p>
        </Col>
      </Row>
      <Row className="text-start">
        <Col>
          <Button variant="outline-secondary" size="sm" className="rounded-0 mt-3">
            Service Code
          </Button>
        </Col>
      </Row>
      <Row className="text-start mt-3">
        <Col>
          <p className="mb-0">© 1997-2023 Netflix, Inc.</p>
        </Col>
      </Row>
    </Container>
  );
};
export default Footer;
