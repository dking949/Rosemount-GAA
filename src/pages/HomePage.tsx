import React, { Component } from "react"
import TwitterTimeline from "../components/TwitterTimeline";
import GoogleMapComponent from "../components/GoogleMapComponent";

export default class HomePage extends Component {
    
    public render() { 
        return(
            <div>
                <div className="parallax">
                    <div className="home-page-heading">
                        <h1>Rosemount GAA Club</h1>
                    </div>
                </div>
                <div className="flex-container">
                <TwitterTimeline
                    href={'https://twitter.com/rosemountgaa?ref_src=twsrc%5Etfw'}
                    message={"Tweets by rosemountgaa"}
                />
                <GoogleMapComponent/>
                </div>
            </div>      
        );
    }
}