import React, { Component } from "react"
import Gallery from "react-photo-gallery";

export default class GalleryPage extends Component {
    
    images: GalleryImg[] = [
        {
            src: "https://rosemountgaaimages.s3-ap-southeast-2.amazonaws.com/boidu%2BEoin.jpg",
            width: 800,
            height: 546
        },
        {
            src: "https://rosemountgaaimages.s3-ap-southeast-2.amazonaws.com/dance.jpg",
            width: 712,
            height: 379
        },
        {
            src: "https://rosemountgaaimages.s3-ap-southeast-2.amazonaws.com/poshea.jpg",
            width: 1944,
            height: 1296
        },
        {
            src: "https://rosemountgaaimages.s3-ap-southeast-2.amazonaws.com/test1.jpg",
            width: 732,
            height: 488
        },
        {
            src: "https://rosemountgaaimages.s3-ap-southeast-2.amazonaws.com/test2.jpg",
            width: 800,
            height: 772
        }
    ]

    public render() {
        return(
        <Gallery photos={this.images}/>
        );
    }
}

interface GalleryImg {
    src: string;
    width: number;
    height: number;
}