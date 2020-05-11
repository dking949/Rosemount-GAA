import React, { useState } from "react";
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

export default function Modal() {
//   state = {
//     modal: false
//   };

  let [modal, toggleModalState] = useState(false);

//   const toggle = () => {
//     setState({
//       modal: !state.modal
//     });
//   }

    return (
        <MDBContainer>
        {/* BUTTON */}
        <MDBBtn color="info" onClick={() =>toggleModalState(modal = !modal)}>Click</MDBBtn>
        {/* MODAL */}
        <MDBModal isOpen={modal}>
            <MDBModalHeader>MDBModal title</MDBModalHeader>
            <MDBModalBody>
            PICTURE WILL GO HERE
            </MDBModalBody>
            <MDBModalFooter>
            <MDBBtn color="secondary" onClick={() => toggleModalState(modal = !modal)}>Close</MDBBtn>
            </MDBModalFooter>
        </MDBModal>
        </MDBContainer>
    );

}