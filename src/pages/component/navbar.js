import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useRouter } from "next/router";

export default function Navbars() {
  const router = useRouter();

  const handleCreateClick = () => {
    router.push(`/detail/create`);
  };

  return (
    <Navbar bg="primary" variant="dark" expand="sm" className="py-1">
      <Container>
        <Navbar.Brand
          onClick={() => router.push(`/`)}
          className="fw-bold text-light fs-4"
        >
          Dibimbing Food List
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => router.push(`/`)} className="text-light">
              Home
            </Nav.Link>
            <Nav.Link onClick={handleCreateClick} className="text-light">
              Create
            </Nav.Link>
          </Nav>
          <Button
            variant="outline-light"
            onClick={() => alert("Search functionality coming soon!")}
            className="fs-5"
          >
            Search
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
