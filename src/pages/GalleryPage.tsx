import React, { Component } from "react"
import Gallery from "react-photo-gallery";
import images from "../data/GalleryImages";

export default class GalleryPage extends Component {

    public render() {
        return(
        <Gallery photos={images}/>
        );
    }
}