import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink } from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";

export default class Navbar extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  public render() {
    return (
      <Router>
        <MDBNavbar color="amber accent-3" light expand="md">
          <MDBNavbarBrand>
            <strong>Rosemount GAA</strong>
          </MDBNavbarBrand>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/about">About</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/gallery">Gallery</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
          <MDBNavLink to="/gallery">todo Crest Here</MDBNavLink>
          </MDBNavbarNav>
        </MDBNavbar>
      </Router>
      );
    }
}
