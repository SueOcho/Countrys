import React from 'react';
import './Experience.css';
import image1 from '../assets/experience/home-startup-about-img.jpg';



function Historia(props) {
    return (
        <section id="historia" className="experience ">
            <div className="container">
                <div className="row align-items-center justify-content-center  vh-100">
                    <div className="col-4 text-end p-5 pt-5">
                        <div>
                                <h2>175+</h2>
                                <p>WORLDWIDE OFFICES</p>
                                <span>Lorem ipsum dolor sit consectetur do eiusmod tempor incididunt</span>
                        </div>
                    </div>
                    <div className="col-4 text-center">
                        <div>
                                <h1>20</h1>
                                <h3>YEAR OF EXPERIENCE</h3>
                        </div>
                    </div>
                    <div className="col-4 p-5">
                        <div>
                            <h2>175</h2>
                            <p>HIGH SKILLED PEOPLE</p>
                            <span>Lorem ipsum dolor sit consectetur do eiusmod tempor incididunt</span>

                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                <img src={image1} alt="chico"  className="imagen"/>
                </div>
            </div>

        </section>
    );
}

export default Historia;