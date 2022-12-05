import Navbar from "./Navbar";
import Images from "./Images";
import Details from "./Details";




function Snekers() {

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Navbar />

                </div>
            </div>
            <div className="row mt-5 ms-4">


                <div className="col-6 ">
                    <Images />

                </div>


                <div className="col-5 mt-5 ms-5 me-5">
                    <Details />

                </div>
            </div>


        </div>
    )



}



export default Snekers;