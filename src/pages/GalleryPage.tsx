import React, { Component } from "react"
import Gallery from "react-photo-gallery";
import images from "../data/GalleryImages";
import Modal from "../components/Modal";
import { MDBContainer } from "mdbreact";

export default class GalleryPage extends Component {

    public render() {
        return(
        <MDBContainer>
            <Gallery photos={images}/>
            <Modal/>
        </MDBContainer>
        );
    }
}