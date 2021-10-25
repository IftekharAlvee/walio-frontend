import React from 'react';
import heroTop from '../../../assets/Landing/LandingHero/HeroTopImage.png';
import heroBelww from '../../../assets/Landing/LandingHero/heroBelowImage.png';

const LandingHero = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 d-flex justify-content-start align-items-center">
                    <div className="w-75">
                        <h1 style={{fontSize:"2.8em",color:"#6D5DD9"}} className="mb-3">
                            Power your business
                            with cryptocurrency
                        </h1>
                        <p style={{fontSize:"1em"}} className="mt-4 mb-5">
                            Start accepting worldwide cryptocurrency payments for all your business needs. Create orders, invoices, simple payment requests or game tokenization with our easy to use API Infrastructure.
                        </p>
                        <button className="btn" style={{backgroundColor:"#6D5DD9",color:"#fff"}}>Start Now </button>
                    </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div className="">
                        <img className="img-fluid" src={heroTop} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingHero;