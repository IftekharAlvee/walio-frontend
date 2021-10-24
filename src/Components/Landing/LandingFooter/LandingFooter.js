import React from 'react';
import logo from '../../../assets/Landing/Footer/walio.png'
import facebook from '../../../assets/Landing/Footer/logo_facebook@2x.png'
import twitter from '../../../assets/Landing/Footer/logo_twitter@2x.png'
import telegram from '../../../assets/Landing/Footer/logo_telegram@2x.png'
import circle from '../../../assets/Landing/Footer/circle.png'
import yellow from '../../../assets/Landing/Footer/Rectangle 4322.png'

const LandingFooter = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <div className="mb-5">
                        <img src={logo} alt="" />
                    </div>
                    <div className="w-75 my-5">
                        <p style={{fontSize:"14px"}}>Walio is cryptocurrency merchant provider based in the United Kingdom. We provide a host of products to allow businesses, developer and individuals to faster and more easily integrate worldwide cryptocurrency payments, or tokenization into their business model.</p>
                    </div>
                    <div className="mt-5">
                        <div>
                            <img className="me-4" src={facebook} alt="" />
                            <img className="me-4" src={twitter} alt="" />
                            <img className="me-4" src={telegram} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <li style={{listStyle:"none"}} className="mb-3">Products</li>

                    <li style={{listStyle:"none"}}>Kickstart</li>
                    <li style={{listStyle:"none"}}>Retail</li>
                    <li style={{listStyle:"none"}}>Incoice Pro</li>
                    <li style={{listStyle:"none"}}>GDS</li>
                    <li style={{listStyle:"none"}} className="mb-3">Wallets</li>

                    <li style={{listStyle:"none"}}>Feature</li>
                    <li style={{listStyle:"none"}}>Fee Structure</li>
                </div>
                <div className="col-md-3">
                    <li style={{listStyle:"none"}} className="mb-3">Resources</li>
 
                    <li style={{listStyle:"none"}}>API Docs</li>
                    <li style={{listStyle:"none"}}>Guides</li>
                    <li style={{listStyle:"none"}}>About Us</li>
                    <li style={{listStyle:"none"}}>FAQ</li>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <img style={{marginRight:"200px"}} src={circle} alt="" />
            </div>
            <div className="d-flex justify-content-between">
                <div className="d-flex align-items-end">
                    <p style={{fontSize:"12px"}}>© Walio All rights reserved.</p>
                </div>
                <img style={{marginRight:"200px"}} src={yellow} alt="" />
            </div>
        </div>
    );
};

export default LandingFooter;