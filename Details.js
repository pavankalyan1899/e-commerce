import React, { Component } from 'react';
import "./Snekers.css"


class Details extends Component {

    constructor() {
        super();
        this.state =
        {
            number: 125,
            count: 0,
            discount: 250,
        }
    }


    AddNumber = () => {
        this.setState({
            number: this.state.number + 125,
            count: this.state.count + 1,
            discount: this.state.discount + 250
        })

    }

    SubNumber = () => {
        this.setState({
            number: this.state.number - 125,
            count: this.state.count - 1,
            discount: this.state.discount - 250
        })
    }



    render() {
        return (
            <div>
                <div className='container mt-5'>
                    <h5 className='orange'>SNEAKER COMPANY</h5>
                    <h1 className='fw-bolder mt-3'>
                        Fall Limited Edition Sneakers
                    </h1>
                    <p className='mt-5 paraGraph'>
                        These low-proflie snekers  are  your prefectly casual wear
                        <br /> companion .Featuring a durable rubber outer sole,they'll
                        <br /> withstand everything the weather can offer.</p>

                    <div className='d-flex mt-4'>
                        <h3 className='fw-bolder'>${this.state.number}.00</h3><h5 className='ms-4 offer'>50%</h5>
                    </div>

                    <h6 className='twofityoff'><s>${this.state.discount}</s></h6>
                    <div className='row mt-5 '>
                        <div className='col-5'>

                            <div className='d-flex CountBtn justify-content-between mt-2 rounded '>
                                <div className='mt-2'>
                                    <button className='btn' onClick={this.SubNumber} ><img src="images/icon-minus.svg" width="18px" heigth="18px" /></button>

                                </div>
                                <div className=' h4 mt-3 fw-bolder'>
                                    {this.state.count}
                                </div>

                                <div className='mt-2'>
                                    <button className='btn' onClick={this.AddNumber} ><img src="images/icon-plus.svg" width="18px" heigth="18px" /></button>
                                </div>


                            </div>


                        </div>
                        <div className='col-7' >
                            <a type='button' className='btn d-flex btnOrange form-control'>
                                <img src="images/icon-cart-details.svg" width='18px' height='20px' className='mt-3' /> <h5 className='mt-3 ms-3'>Add to card</h5>
                            </a>
                        </div>

                    </div>

                </div>

            </div>
        );
    }
}

export default Details;