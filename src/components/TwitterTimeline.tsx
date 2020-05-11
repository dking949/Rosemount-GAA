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
            <MDBContainer className="flex-item1">
                <a className="twitter-timeline"
                    data-theme="dark"
                    data-height="450"
                    data-width="400"
                    href={this.props.href}>{this.props.message}
                </a>
            </MDBContainer>);
            
    }
}

interface TwitterProps {
    href: string;
    message: string;
}