import './MainProvider.css';
import React from 'react';
import imagen1 from '../assets/provider/home-startup-service-img-01.jpg';
import imagen2 from '../assets/provider/home-startup-service-img-02.jpg';
import imagen3 from '../assets/provider/home-startup-service-img-03.jpg';
import imagen4 from '../assets/provider/home-startup-service-img-04.jpg';



function MainProvider(props) {
    return (
        <div className="padedd">
            <div className="container ">
                <div className="row">
                    <div className="col-6">
                        <h1>We provide advanced <br /> solutions to growin your <br /> online business</h1>
                    </div>
                    <div className="col-3">
                        <p>Build perfect websites</p>
                        <span>Lorem ipsum dolor consectetur adipiscing elit eiusmod tempor elit eiusmod tempor.</span>
                    </div>
                    <div className="col-3">
                        <p>Unique experiences</p>
                        <span>Lorem ipsum dolor consectetur adipiscing elit eiusmod tempor elit eiusmod tempor.</span>
                    </div>
                </div>
            </div>


        <div className="container pt-5 mt-5">
            <div className="row">
                <div className="col-3">
                    <div className="imagenes"> <img src={imagen1} alt="" className="img-fluid" /></div>
                </div>
                <div className="col-3">
                    <div className="imagenes"><img src={imagen2} alt="" className="img-fluid"/></div>  
                    </div>              
                <div className="col-3">
                    <div className="imagenes"><img src={imagen3} alt="" className="img-fluid"/></div>
                    </div>
                <div className="col-3">
                    <div className="imagenes"><img src={imagen4} alt="" className="img-fluid"/></div>
                </div>
            </div>
        </div>
            

        </div>
    );
}

export default MainProvider;