import React, { Component } from "react"
import Carousel from "../components/Carousel";
import TwitterTimeline from "../components/TwitterTimeline";

export default class HomePage extends Component {
    
    public render() { 
        return(
            <div className="flex-container">
                <div>
                    <TwitterTimeline href={'https://twitter.com/rosemountgaa?ref_src=twsrc%5Etfw'}
                        message={"Tweets by rosemountgaa"} />
                </div>
                <div>
                    <Carousel/>
                </div>
            </div>          
        );
    }
}