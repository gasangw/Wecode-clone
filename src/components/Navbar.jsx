import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './imgs/wecode.svg'
import './nav.css'

class Navigation extends Component {
  render() {
    return (
    <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark" fixed="top">
    <Container className='container'>
      <Navbar.Brand><img src={logo} alt='mylogo' className='mylogo'/></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className='Nav-container'>
          <NavLink className='nav-items' to='/home'>HOME</NavLink>
          <NavLink className='nav-items' to='wecode'>WECODE</NavLink>
          <NavLink className='nav-items' to='program'>OUR PROGRAM</NavLink>
          <NavLink className='nav-items' to='apply'>APPLY NOW</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    )
  }
}

export default Navigation
