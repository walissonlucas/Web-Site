import { useState, useEffect, SetStateAction } from "react";
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FiLinkedin, FiGithub } from 'react-icons/fi';
import { BiLogoGmail } from 'react-icons/bi';
import logo from '../assets/images/header-img.svg';


export const NavBar = () => {
   const [activeLink, setActiveLink] = useState('home');
   const [scrolled, setScrolled] = useState(false);

   useEffect(() => {
      const onScroll = () => {
         if (window.scrollY > 50) {
            setScrolled(true);
         } else {
            setScrolled(false);
         }
      }

      window.addEventListener("scroll", onScroll);

      return () => window.removeEventListener("scroll", onScroll);
   }, [])

   const onUpdateActiveLink = (value: SetStateAction<string>) => {
      setActiveLink(value);
   }

   return (
      <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            <Nav.Link href="#links" className={activeLink === 'links' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('links')}>Links</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className="social-icon">
               <a className="linked" href="#"> <FiLinkedin color="#fff"/> </a>
               <a className="git" href="#"> <FiGithub color="#fff"/> </a>
               <a className="mail" href="#"> <BiLogoGmail color="#fff"/> </a>
            </div>
            <button className='vvd' onClick={() => console.log('connect')}><span>Lets Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   );
}