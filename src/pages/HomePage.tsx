import React, { Component } from "react"
import TwitterTimeline from "../components/TwitterTimeline";
import { MDBContainer } from "mdbreact";

export default class HomePage extends Component {
    
    public render() { 
        return(
            <div className="parallax">
                <MDBContainer className="home-page-heading">
                    <h1>Rosemount GAA Club</h1>
                </MDBContainer>
                <MDBContainer className="flex-container">
                <TwitterTimeline
                    href={'https://twitter.com/rosemountgaa?ref_src=twsrc%5Etfw'}
                    message={"Tweets by rosemountgaa"}
                />
                <div id="map-container-google-2" className="z-depth-1-half map-container">
                <iframe src="https://maps.google.com/maps?q=chicago&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" allowFullScreen></iframe>
                </div>
                </MDBContainer>
            </div>          
        );
    }
}