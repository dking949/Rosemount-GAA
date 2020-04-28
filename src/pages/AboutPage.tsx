import React, { Component }  from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBView, MDBBtn } from "mdbreact";
import { birth, championshipSuccess, park } from "../data/about.json";


export default class AboutPage extends Component {

  // constructor(props: string) {
  //   super(props);
  //   //TODO
  // }
    
    public render() {
        return (
        <MDBCard className="my-5 px-5 pb-5">
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
                <MDBBtn color="success" className="waves-light ">
                  Read more
                </MDBBtn>
              </MDBCol>
            </MDBRow>
            <hr className="my-5" />
            <MDBRow>
              <MDBCol lg="7">
                <h3 className="font-weight-bold mb-3 p-0">
                  <strong>Championship Success</strong>
                </h3>
                <p>
                  { championshipSuccess }
                </p>
                <MDBBtn
                  color="pink"
                  className="mb-lg-0 mb-4 waves-light"
                >
                  Read more
                </MDBBtn>
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
            <hr className="my-5" />
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
                  <strong>FR. O’Growney Park</strong>
                </h3>
                <p>
                  { park }
                </p>
                <MDBBtn color="indigo" className="waves-light ">
                  Read more
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      );
    }
}