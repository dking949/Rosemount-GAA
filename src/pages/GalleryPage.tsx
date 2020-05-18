import React, { Component } from "react";
import Gallery from "react-photo-gallery";
import images from "../data/GalleryImages";
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalFooter } from "mdbreact";

interface MyProps {}
  
interface MyState {
    imgUrl: string,
    modalOpen: boolean
}

export default class GalleryPage extends Component<MyProps, MyState> {

    constructor(props: any) {
        super(props);
        this.state = {
            imgUrl: "",         //url should be empty on initialization
            modalOpen: false    //should be closed on initialization
        }

        this.photoClicked = this.photoClicked.bind(this);
        this.toggleOpenState = this.toggleOpenState.bind(this);
    }

    private async photoClicked(event: any, obj: any) {
        const index: number = obj.index;
        const src1: string = images[index].src

        //Open the dialog
        this.toggleOpenState();
        //change the image url
        this.setState({
            imgUrl: src1
        });
    }

    //setState is not synchronous so muct use 'async'
    private toggleOpenState() {
        this.setState({
            modalOpen: !this.state.modalOpen
        });
    }
    
    public render() {
        return(
        <MDBContainer>
            <Gallery photos={images}
            onClick={this.photoClicked}/>
            
            {/* The Dialog*/}
            <MDBModal isOpen={this.state.modalOpen} size="lg" className="gallery-modal">
                <MDBModalBody>
                    <img src={this.state.imgUrl} alt="TODO" className="gallery-modal-img"/>
                </MDBModalBody>
                <MDBModalFooter>
                <MDBBtn color="secondary" onClick={this.toggleOpenState}>Close</MDBBtn>
                </MDBModalFooter>
            </MDBModal>
        </MDBContainer>
        );
    }
}