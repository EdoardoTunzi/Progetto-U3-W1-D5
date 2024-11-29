import { Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "react-bootstrap";
import { Grid, JustifyLeft } from "react-bootstrap-icons";

const ActionBar = () => {
  return (
    <Container fluid className="d-flex flex-wrap justify-content-between align-items-center mb-2">
      <div className="d-flex align-items-center gap-4">
        <h3>Saga Collections</h3>
        <Dropdown>
          <DropdownToggle className="border-white bg-black  border small" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Genres
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="#">Action</DropdownItem>
            <DropdownItem href="#">Romance</DropdownItem>
            <DropdownItem href="#">Fantasy</DropdownItem>
            <DropdownItem href="#">Documentaries</DropdownItem>
            <DropdownItem href="#">Comedy</DropdownItem>
            <DropdownItem href="#">Horror</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <div className="img-box d-flex small">
        {/* <!--list icon--> */}
        <span className="border small py-1 px-2 m-0">
          <i className="bi bi-justify-left"></i>
          <JustifyLeft size={20} color="white" />
        </span>
        {/*  <!--grid icon--> */}
        <span className="border small py-1 px-2 m-0">
          <Grid size={20} color="white" />
        </span>
      </div>
    </Container>
  );
};
export default ActionBar;
