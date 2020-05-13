import React, { Component } from "react";
import Gallery from "react-photo-gallery";
import images from "../data/GalleryImages";
import Modal from "../components/Modal";
import { MDBContainer } from "mdbreact";
import ReactDOM from "react-dom";

export default class GalleryPage extends Component {

    private photoClicked(event: any, obj: any): void {
        const index: number = obj.index;
        const src1: string = images[index].src
        console.log("event: ", event);
        console.log("index: ", index);
        console.log("src: ", src1);
        ReactDOM.render(<Modal src={src1} open={true}/>, document.getElementById("modal-container"));
    }
    
    public render() {
        return(
        <MDBContainer>
            <Gallery photos={images}
            onClick={this.photoClicked}/>
            <div id="modal-container"/>
        </MDBContainer>
        );
    }
}