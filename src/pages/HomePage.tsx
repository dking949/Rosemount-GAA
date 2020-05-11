import React, { Component } from "react"
import Carousel from "../components/Carousel";
import TwitterTimeline from "../components/TwitterTimeline";
import { MDBContainer, MDBRow } from "mdbreact";

export default class HomePage extends Component {
    
    public render() { 
        return(
            <div className="parallax">
                <MDBContainer className="home-page-heading">
                    <MDBRow>
                        <h1>Rosemount GAA Club</h1>
                    </MDBRow>
                </MDBContainer>
                <MDBContainer className="flex-container">
                <TwitterTimeline
                    href={'https://twitter.com/rosemountgaa?ref_src=twsrc%5Etfw'}
                    message={"Tweets by rosemountgaa"}
                />
                <Carousel />
                </MDBContainer>
            </div>          
        );
    }
}