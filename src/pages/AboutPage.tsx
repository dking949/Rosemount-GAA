import React, { Component }  from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBView } from "mdbreact";
import { birth, championshipSuccess, park, rollOfHonour } from "../data/about.json";


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
                    src="https://rosemountgaaimages.s3-ap-southeast-2.amazonaws.com/huddle.jpg"
                    alt="team huddle"
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
                  { championshipSuccess.para1 }
                </p>
                <p>
                  { championshipSuccess.para2 }
                </p>
                <ul>
                  <li>Senior Champions: {rollOfHonour.senior}</li>
                  <li>Intermediate Champions: {rollOfHonour.intermediate}</li>
                  <li>Junior Champions: {rollOfHonour.junior}</li>
                </ul>
              </MDBCol>
              <MDBCol lg="5">
                <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                  <img
                    className="img-fluid"
                    src="https://rosemountgaaimages.s3-ap-southeast-2.amazonaws.com/junior.jpg"
                    alt="Junior Champions 2007"
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
                    src="https://rosemountgaaimages.s3-ap-southeast-2.amazonaws.com/park.jpg"
                    alt="gaa-grounds"
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
                  { park.para1 }
                </p>
                <p>
                  { park.para2}
                </p>
                <p>
                  { park.para3 }
                </p>
                <p>
                  { park.para4}
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      );
    }
}