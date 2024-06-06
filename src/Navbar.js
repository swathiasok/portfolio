import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import './Navbar.css'

function NavBar() {
  return (
    <Navbar expand="lg" className="nav-body">
      <Container fluid> 
        <Button class="resume-button" style={{ backgroundColor:"transparent", border: "2px solid #5B9A8B", color:"#5B9A8B"}}>
          <Nav.Link className='nav-button' href="https://drive.google.com/file/d/1ZHVUYNy9N6fukShhehUwQIwmdcln9QS2/view?usp=sharing" download="SwathiA_Resume.pdf">
              CV <i class="fas fa-download"></i> 
          </Nav.Link>
        </Button>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav style={{padding:"1%"}}>
            <Nav.Link className="nav-link" href="#home">Home</Nav.Link>
            <Nav.Link className="nav-link" href="#skills">Skills</Nav.Link>
            <Nav.Link className="nav-link" href="#experiences">Experiences</Nav.Link>
            <Nav.Link className="nav-link" href="#projects">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
