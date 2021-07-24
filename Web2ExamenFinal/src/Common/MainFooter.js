import React from 'react';
import './MainFooter.css';
import logo from '../assets/footer/logo-green-dark.png';


function MainFooter(props) {
    return (
        <footer id="main-footer ">
            <div className="footerx">
        <div className="container py-5 ">
            <div className="row">
                <div className="col-3">
                    <div>
                        <span>Company</span>
                        <p>About company</p>
                        <p>Our services</p>
                        <p>Job opportunities</p>
                        <p>Contact us</p>

                    </div>
                </div>
                <div className="col-3">
                    <div>
                    <span>Customer</span>
                        <p>Client support</p>
                        <p>Pricing packages</p>
                        <p>Company story</p>
                        <p>Latest news</p>
                    </div>
                </div>
                <div className="col-3">
                    <div>
                    <span>Resources</span>
                        <p>Theme guide</p>
                        <p>Support desk</p>
                        <p>What we offer</p>
                        <p>Company history</p>

                    </div>
                </div>
                <div className="col-3">
                    <div>
                    <span>Services</span>
                        <p>Brand experience</p>
                        <p>E-commerce website</p>
                        <p>Content writing</p>
                        <p>Marketing strategy</p>
                    </div>
                </div>
            </div>

        </div>

        </div>
        <div className="container py-5 my5 text-end">
            <div className="row">
            <div className="col-2">
            <img src={logo} alt="" className=" img-fluid"/>
            </div>
            <div className="col-5"></div>
            <div className="col-5">
            <div className="ms-auto"> © 2021 Litho is Proudly Powered by ThemeZaa</div>

            </div>
            </div>
        </div>
        </footer>
    );
}

export default MainFooter;