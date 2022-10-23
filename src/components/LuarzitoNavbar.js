import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import logo from '../assets/logo.png';

const LuarzitoNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
        <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            Luarzito
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Comandos</Nav.Link>
            <Nav.Link href="#pricing">Sobre</Nav.Link>
            <NavDropdown title="Políticas" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Política de Privacidade</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Termos de uso
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Suporte</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Adicionar bot
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default LuarzitoNavbar;