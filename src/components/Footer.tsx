import React, { Component } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

export default class Footer extends Component{
  render() {
      return (
        <MDBFooter color="unique-color-dark" className="page-footer font-small pt-0">
          <div style={{ backgroundColor: "#6351ce" }}>
            <MDBContainer fluid className="text-center text-md-left">
              <MDBRow className="py-4 d-flex align-items-center">
                <MDBCol md="6" lg="5" className="text-center text-md-left mb-4 mb-md-0">
                  <h6 className="mb-0 white-text">
                    Get connected with us on social networks!
                  </h6>
                </MDBCol>
                <MDBCol md="6" lg="7" className="text-center text-md-right">
                  <a className="footer-social-media-icons" href="https://www.facebook.com/Rosemount-GAA-248172435935592/">
                    <i className="fab fa-facebook-f white-text mr-lg-4"> </i>
                  </a>
                  <a className="footer-social-media-icons" href="https://twitter.com/rosemountgaa">
                    <i className="fab fa-twitter white-text mr-lg-4"> </i>
                  </a>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </div>
          <MDBContainer className="mt-5 text-center text-md-left">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="2" xl="2" className="mb-4">
                <h6 className="text-uppercase font-weight-bold">
                  <strong>Useful links</strong>
                </h6>
                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                <p>
                  <a href="https://www.oneills.com/au_en/shop-by-team/gaa/ireland/rosemount-gaa-club.html">Club Gear</a>
                </p>
                <p>
                  <a href="https://westmeathgaa.ie/">Westmeath GAA</a>
                </p>
              </MDBCol>
              <MDBCol md="4" lg="3" xl="3" className="mb-4">
                <h6 className="text-uppercase font-weight-bold">
                  <strong>Contact</strong>
                </h6>
                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                <p>
                  <i className="fa fa-envelope mr-3" /> (Club Seceratary e-mail)
                </p>
                <p>
                  <i className="fa fa-envelope mr-3" /> (Club Treasurer e-mail)
                </p>
                <p>
                  <i className="fa fa-phone mr-3" /> + 01 234 567 88
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBFooter>
      );
    } 
}