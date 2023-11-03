
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Container } from 'react-bootstrap'
import { ReactComponent as Logo } from "../asset/img/logo.svg"
import advertise from "../asset/img/Screenshot 2023-11-02 122641.png"
import { Link } from 'react-router-dom';
export default function Navigation() {
  
  return (
    <>
      <Navbar expand="lg" className='bg-body-tertiry w-5 clickblur'>
        <Container>
          <Navbar.Brand href="#home"><Logo className='v-logo' /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto text dark">
              <NavDropdown title="language" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="/language">english</NavDropdown.Item>
                <NavDropdown.Item href="/language">
                  hindi
                </NavDropdown.Item>
                <NavDropdown.Item href="/language">mrathi</NavDropdown.Item>
                <NavDropdown.Item href="/language">
                  punjabi
                </NavDropdown.Item>
              </NavDropdown>
              <Link className='nav-link' to="/we-are-hiring">we are hiring</Link>
              <Link className='nav-link' to="/investor-relation">investor relation</Link>
              <Link className='nav-link' to="/advertise"><img src={advertise} alt='' className='advertise'></img> Advertise</Link>
              <Link to="/freelisting" className='nav-link'><div className="v-business"><p className='m-0 bg-danger d-lg-block d-sm-inline'>
                BUSINESS
              </p>
                Free listing
              </div></Link>
              <Link to="/notification" className='nav-link' >🔔</Link>
              <Link to="/login" className='nav-link' ><button className='btn bg-primary text-white text-md' onClick={()=>{
                let blur=document.querySelectorAll(".clickblur")
                          blur.forEach((element)=>{
                           element.setAttribute("class","blur")
                          })
              }}>login/signUp</button></Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}