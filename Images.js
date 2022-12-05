import React, { Component } from 'react';
import "./Snekers.css"
class Images extends Component {

    constructor(props) {
        super(props);
        this.state = {
            images: "images/image-product-1.jpg",

        }
    }

    displayImageOne = () => {
        this.setState({
            images: "images/image-product-1.jpg"
        })
    }
    displayImageTwo = () => {
        this.setState({
            images: "images/image-product-2.jpg"
        })
    }
    displayImageThree = () => {
        this.setState({
            images: "images/image-product-3.jpg"
        })
    }
    displayImageFour = () => {
        this.setState({
            images: "images/image-product-4.jpg"
        })
    }



    render() {
        return (
            <div className='container row'>
                <div className='card carding'>

                    <div className='card-header cardHeading'>

                        <img src={this.state.images} width="100%" height="100%" className='roundMain' />
                    </div>
                    <div className='card-body'>

                        <div className='d-flex justify-content-around gap-3'>
                            <div className='imgThumDisplay'>
                                <img src="images/image-product-1-thumbnail.jpg" className='round' onMouseEnter={this.displayImageOne} width="100%" height="100%" />
                            </div>
                            <div className='imgThumDisplay'>
                                <img src="images/image-product-2-thumbnail.jpg" className='round' onMouseEnter={this.displayImageTwo} width="100%" height="100%" />
                            </div>
                            <div className='imgThumDisplay'>
                                <img src="images/image-product-3-thumbnail.jpg" className='round' onMouseEnter={this.displayImageThree} width="100%" height="100%" />
                            </div>
                            <div className='imgThumDisplay'>
                                <img src="images/image-product-4-thumbnail.jpg" className='round' onMouseEnter={this.displayImageFour} width="100%" height="100%" />
                            </div>

                        </div>

                    </div>

                </div>



            </div>
        );
    }
}

export default Images;