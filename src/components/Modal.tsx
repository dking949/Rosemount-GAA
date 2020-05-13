import React, { useState } from "react";
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

export default function Modal(props: any) {

  let [modal, toggleModalState] = useState(props.open);
  let [modalImg] = useState(props.src);

    return (
        <MDBContainer>
            <MDBModal isOpen={modal} size="lg" className="gallery-modal">
                <MDBModalBody>
                    <img src={modalImg} alt="TODO" className="test"/>
                </MDBModalBody>
                <MDBModalFooter>
                <MDBBtn color="secondary" onClick={() => toggleModalState(modal = false)}>Close</MDBBtn>
                </MDBModalFooter>
            </MDBModal>
        </MDBContainer>
    );

}