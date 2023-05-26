
import { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo1 from '../Imagenes/logo1.png';


export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('Inicio');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScrolled = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener('scroll', onScrolled);

    return () => {
          window.removeEventListener('scroll', onScrolled);
        }
}, [] )  
    
    const onUpdateActiveLink = (value) => {
      setActiveLink(value);
    }  

    return (
        <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo1} alt="Logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
           <span className= "navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href='#Inicio' className={activeLink === 'Inicio' ? 'active navbar-link' : 'navbar-link'} onClick={ () => onUpdateActiveLink ('Inicio')}>Inicio</Nav.Link>
            {/* <Nav.Link href="#Informacion"  className={activeLink === 'Informacion' ? 'active navbar-link' : 'navbar-link'} onClick={ () => onUpdateActiveLink ('Informacion')}>Información</Nav.Link>  */}
            <Nav.Link href="#Conoce"  className={activeLink === 'Conoce' ? 'active navbar-link' : 'navbar-link'} onClick={ () => onUpdateActiveLink ('Conoce')}>Para Conocer</Nav.Link>
            <Nav.Link href="#Gastronomia"  className={activeLink === 'Gastronomia' ? 'active navbar-link' : 'navbar-link'} onClick={ () => onUpdateActiveLink ('Gastronomia')}>Gastronomía</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a href='#'><img src ={''} alt= ''/></a>
              <a href='#'><img src ={''} alt= ''/></a>
              <a href='#'><img src ={''} alt= ''/></a>
              <a href='#'><img src ={''} alt= ''/></a>
            </div>
            <button className='vvd' onClick={() => console.log('connect')} ><span>Lets connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}