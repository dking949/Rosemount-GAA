import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink } from "mdbreact";

export default class Navbar extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  public render() {
    return (
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
      );
    }
}
