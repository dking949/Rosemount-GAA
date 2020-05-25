import React, { Component } from "react";

export default class GoogleMap extends Component {
  render() {
    return(
      <div className="flex-item2">
        <iframe title="rosemount-gaa-grounds" className="map-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2377.2577314732744!2d-7.645486584208427!3d53.42809987999627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485db69803423f73%3A0x599e749fe12e1d9b!2sRosemount%20GAA%20Club!5e0!3m2!1sen!2sau!4v1590370134483!5m2!1sen!2sau" 
          data-frameborder="0" data-allowfullscreen="false" aria-hidden="false" data-tabindex="0"></iframe>
      </div>
    );
  }
}