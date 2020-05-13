import React, { Component }  from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBView } from "mdbreact";
import { birth, championshipSuccess, park } from "../data/about.json";


export default class AboutPage extends Component {
    
    public render() {
        return (
        <MDBCard className="px-5 pb-5">
          <MDBCardBody>
            <MDBRow>
              <MDBCol lg="5">
                <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                  <img
                    className="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg"
                    alt=""
                  />
                  <a href="#!">
                    <MDBMask overlay="white-slight" />
                  </a>
                </MDBView>
              </MDBCol>
              <MDBCol lg="7">
                <h3 className="font-weight-bold mb-3 p-0">
                  <strong>History of the Club</strong>
                </h3>
                <p>
                  { birth }
                </p>
              </MDBCol>
            </MDBRow>
            <hr/>
            <MDBRow>
              <MDBCol lg="7">
                <h3 className="font-weight-bold mb-3 p-0">
                  <strong>Championship Success</strong>
                </h3>
                <p>
                  { championshipSuccess }
                </p>
              </MDBCol>
              <MDBCol lg="5">
                <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                  <img
                    className="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Others/img%20(34).jpg"
                    alt=""
                  />
                  <a href="#!">
                    <MDBMask overlay="white-slight" />
                  </a>
                </MDBView>
              </MDBCol>
            </MDBRow>
            <hr/>
            <MDBRow>
              <MDBCol lg="5">
                <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                  <img
                    className="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Others/img (28).jpg"
                    alt=""
                  />
                  <a href="#!">
                    <MDBMask overlay="white-slight" />
                  </a>
                </MDBView>
              </MDBCol>
              <MDBCol lg="7">
                <h3 className="font-weight-bold mb-3 p-0">
                  <strong>Fr O’Growney Park</strong>
                </h3>
                <p>
                  { park }
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      );
    }
}