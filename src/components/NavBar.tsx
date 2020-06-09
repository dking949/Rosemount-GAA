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
          <MDBNavItem>
            <MDBNavLink to="/">Home</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/about">About</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/gallery">Gallery</MDBNavLink>
          </MDBNavItem>
          {/*<MDBNavItem>
            <MDBNavLink to="/news">News</MDBNavLink>
          </MDBNavItem>*/}
        </MDBNavbarNav>
        <MDBNavbarNav right>
        <MDBNavItem>
            <img className="navbar-logo"
            src="https://rosemountgaaimages.s3-ap-southeast-2.amazonaws.com/crest.png"
            alt="club crest"/>
        </MDBNavItem>
        </MDBNavbarNav>
      </MDBNavbar>
      );
    }
}
