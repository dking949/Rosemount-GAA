import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
//import { Auth } from "aws-amplify";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
      return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event: any) {
    event.preventDefault();
  
    console.log(email + "\n" + password);
    try {
      //await Auth.signIn(email, password);
      alert("Logged in");
    } catch (e) {
      alert(e.message);
    }
  }

  return (

    <MDBContainer className="Login">
        <MDBRow>
            <MDBCol md="6">
            <form onSubmit= {handleSubmit}>
                <p className="h5 text-center mb-4">Sign in</p>
                <div className="grey-text">
                <MDBInput label="Type your email"
                icon="envelope"
                group type="email"
                value={email}
                onChange={e => setEmail((e.target as HTMLTextAreaElement).value)}/>
                <MDBInput label="Type your password"
                icon="lock" 
                value={password}
                group type="password" 
                onChange={e => setPassword((e.target as HTMLTextAreaElement).value)} />
                </div>
                <div className="text-center">
                <MDBBtn disabled={!validateForm()} type="submit" color="primary">Login</MDBBtn>
                </div>
            </form>
            </MDBCol>
        </MDBRow>
    </MDBContainer>
  );
}