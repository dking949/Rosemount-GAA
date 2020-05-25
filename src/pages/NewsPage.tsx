import React, { Component } from "react"

export default class NewsPage extends Component {
    
    public render() {
        return(
          <div>
            <h1>This is the NewsPage</h1>
            <p>This page is currently under construction.
              <br/>
              The finished product will show a newsfeed/list of form entries displaying local news.
              The content will be fetched from DynamoDB table that only an admin will have write access to.
            </p>
          </div>
        );
    }
}