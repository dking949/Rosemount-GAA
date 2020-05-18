import React, { Component } from "react";

export default class TwitterTimeline extends Component<TwitterProps>{

    public componentDidMount() {
        const script = document.createElement("script");

        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;

        document.body.appendChild(script);
    }

    public render() {
        return(
            <div className="flex-item1">
                <a className="twitter-timeline"
                    data-height="450"
                    data-width="400"
                    href={this.props.href}>{this.props.message}
                </a>
            </div>);
            
    }
}

interface TwitterProps {
    href: string;
    message: string;
}