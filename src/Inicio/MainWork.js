import React from 'react';
import './MainWork.css';

function MainWork(props) {
    return (
        <div>
            <div className="container text-center work">
                <div className="row ">
                    <div className="col-2"></div>
                    <div className="col-8">
                    <p>Love to work together</p>
                    <h2>Are you ready to work with us? <br /> Let's grow your business.</h2>

                    </div>
                    <div className="col-2"></div>
                    <div className="col-4"></div>

                    <div className="col-4">
                    <input type="text" className="form-control " placeholder="Enter your email adders" />
                    </div>
                    <div className="col-4"></div>


                </div>
                
            </div>
            
        </div>
    );
}

export default MainWork;