import React, { Component } from "react"

export default class HomePage extends Component {
    
    public render() {
        return(
            
            <div>
               <a className="twitter-timeline" data-width="300" data-theme="dark"
               href="https://twitter.com/rosemountgaa?ref_src=twsrc%5Etfw">Tweets by rosemountgaa</a> 
               <script async src="https://platform.twitter.com/widgets.js" data-charset="utf-8"></script>
            </div>
        );
    }
}