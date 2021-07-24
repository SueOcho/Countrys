import React from 'react';
import './MainAmazing.css';


function MainAmazing(props) {
    return (
        <section >
        <div className="100vh colorAmazing paddedamazing">
            <div className="container my-5">
                <div className="row text-center be" >
                    <p>Amazing desing services</p>   
                    <h2>Beautiful and easy to use professional <br /> animations and drag & drop feature</h2>
                </div>
            </div>

            <div className="container text-center my-5 py-5">
                <div className="row">
                    <div className="col-4">
                        <div className="box">
                        <i class="fas fa-shopping-bag fa-3x"></i>
                         <p className="pt-4">eCommerce development</p>
                         <span>Lorem ipsum dolor sit consectetur <br /> adipiscing elit eiusmod incididunt.</span>
                        </div>
                    </div>
                    <div className="col-4">
                    <div className="box">
                    <i class="fas fa-lock fa-3x"></i>
                        <p className="pt-4">eCommerce development</p>
                        <span>Lorem ipsum dolor sit consectetur <br /> adipiscing elit eiusmod incididunt.</span>
                    </div>

                    </div>
                    <div className="col-4">
                    <div className="box">
                    <i class="fas fa-expand-arrows-alt fa-3x"></i>
                        <p className="pt-4">Social media marketing</p>
                        <span>Lorem ipsum dolor sit consectetur <br /> adipiscing elit eiusmod incididunt.</span>
                    </div>
                    </div>
                </div>
            </div>


            
        </div>
        <div className="container-fluid paddedb colorAmazing">
                <div className="row ela text-center">
                    <div className="col ms-auto me-auto">
                    <a href="/">SEE ALL SERVICES</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MainAmazing;