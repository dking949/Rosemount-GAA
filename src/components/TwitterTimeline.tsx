import React, { Component } from "react";
import { MDBContainer } from "mdbreact";


export default class TwitterTimeline extends Component<TwitterProps>{

    public componentDidMount() {
        const script = document.createElement("script");

        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;

        document.body.appendChild(script);
    }

    public render() {
        return(
            <MDBContainer>
                <a className="twitter-timeline"
                    data-theme="dark"
                    data-height="500"
                    href={this.props.href}>{this.props.message}}
                </a>
            </MDBContainer>);
            
    }
}

interface TwitterProps {
    href: string;
    message: string;
}