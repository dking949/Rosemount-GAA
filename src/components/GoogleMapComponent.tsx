import React, { Component } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap} from "react-google-maps"
import { MDBContainer } from "mdbreact";


const API_KEY = "TODO";

const Map = () => {
    return(
        <GoogleMap default-zoom={1}
        default-center={{lat: 53, lng: -7}}/>
    );
}

const WrappedMap: any = withScriptjs(withGoogleMap(Map));

export default class GoogleMapComponent extends Component {
    
    render() {
        return(
            <MDBContainer className="flex-item2">
                <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${API_KEY}`}
                loadingElement={<div style={{ height: "100%"}}/>}
                containerElement={<div style={{ height: "100%"}}/>}
                mapElement={<div style={{ height: "100%"}}/>}
                />
            </MDBContainer>
        );
    }
}