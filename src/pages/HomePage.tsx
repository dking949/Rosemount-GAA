import React, { Component } from "react"

export default class HomePage extends Component {

    componentDidMount() {
        const script = document.createElement("script");

        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;

        document.body.appendChild(script);
    }
    
    public render() { 
        return(
            
            <div>
               <a className="twitter-timeline" data-width="300" data-height="400" data-theme="dark"
               href="https://twitter.com/rosemountgaa?ref_src=twsrc%5Etfw">Tweets by rosemountgaa</a>
            </div>
        );
    }
}