import React from 'react';
import heroBelow from '../../../assets/Landing/LandingHero/heroBelowImage.png';

const LandingAbout = () => {
    return (
        <div className="container mt-5">
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="w-75">
                            <h2 style={{color: '#47CE7D'}} className="mb-5">
                                A flexible payments solution
                            </h2>
                            <p style={{color: '#80858B'}}>
                                Walio integrates a host of features to allow websites, and apps accept and tokenize cryptocurrency with easy. Our products facilitate simple payment creations for quick transactions, invoicing, order building and subscription based business models.
                            </p>
                        </div>
                        <div className="w-75">
                            <img className="img-fluid" src={heroBelow} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="w-75">
                            <p style={{color: '#80858B'}}className="mt-5">
                                Whether you are an online or in-person retailer, marketplace, service provider, game developer, freelancer or anything in between, Walio has an easy solution for your cryptocurrency payment needs.
                            </p>
                            <button className="btn mt-2" style={{border:"1px solid #47CE7D", color:"#47CE7D"}}>
                                Start Accepting Crypto
                            </button>
                        </div>
                        <div style={{marginTop:"25%"}}>
                            <div>
                                <h1 style={{color: '#6D5DD9'}}>Why Walio?</h1>
                                <p style={{color: '#80858B'}}className="mt-4">Walio offers the most powerful, flexible, and scalable cryptocurrency merchant platform available. Accept secure payments in over 21 Cryptocurrencies over multiple blockchain networks and create them in over 18 fiat currencies with our Bridged Blockchain Payment System!</p>
                                <p className="mt-4">Read The Docs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingAbout;