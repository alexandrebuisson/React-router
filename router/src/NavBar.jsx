import React, { Component } from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';


import './NavBar.css'

class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
            <Navbar color="dark" expand="xs">
            <NavbarBrand href="/"></NavbarBrand>
            <a exact to="/"><img className="logo" src="https://seeklogo.com/images/R/react-router-logo-AB5BFB638F-seeklogo.com.png" alt="logo" /></a>
            <Nav className="col" navbar>
                <NavItem className="d-none d-sm-block">
                    <NavLink activeClassName="selected" exact to="/"> Home </NavLink>
                </NavItem>
                <NavItem className="d-none d-sm-block">
                    <NavLink activeClassName="selected" to="/notre-histoire"> History </NavLink>
                </NavItem>
            </Nav>

        </Navbar>
         );
    }
}
 
export default NavBar;