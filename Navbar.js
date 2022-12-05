

function Navbar() {

    return (
        <div>

            <div className="container  mt-5">
                <div className="row">
                    <div className="col-2 ">
                        <div className="fw-bolder fs-2">
                            <img src="images/logo.svg" />
                        </div>
                    </div>
                    <div className="col-7 mt-3">
                        <ul className="d-flex fs-5 uitext justify-content-start " style={{ listStyleType: "none" }}>
                            <li className="">
                                Collections
                            </li>
                            <li className="ms-5">
                                Men
                            </li>
                            <li className="ms-5" >
                                Women
                            </li>
                            <li className="ms-5" >
                                About
                            </li>
                            <li className="ms-5">
                                Contact
                            </li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <div className="d-flex justify-content-end">
                            <div className="me-5 mt-3">
                                <img src="images/icon-cart.svg" width="30px" heigth="30px" />
                            </div>
                            <div className="me-3">

                                <img src="images/image-avatar.png" width="55px" heigth="55px" />
                            </div>

                        </div>
                    </div>


                </div>
                <hr />

            </div>

        </div>



    )


}

export default Navbar;