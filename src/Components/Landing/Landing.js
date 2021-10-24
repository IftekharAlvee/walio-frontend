import React from 'react';
import HowWalioWorks from './HowWalioWorks/HowWalioWorks';
import LandingClientReview from './LandingClientReview/LandingClientReview';
import LandingFaq from './LandingFaq/LandingFaq';
import LandingClientLogo from './LandingClientLogo/LandinClientLogo'
import LandingFooter from './LandingFooter/LandingFooter';
import LandingContact from './LandingContact/LandingContact';

const Landing = () => {
    //#6D5DD9
    //#47CE7D 
    return (
        <div>
            <div className="my-5 container">
                <HowWalioWorks></HowWalioWorks>
            </div>
            <div style={{backgroundColor:"#F8F8F8"}}>
                <div style={{marginTop:"100px",marginBottom:"150px",paddingTop:"100px"}} className=" container">
                    <LandingFaq></LandingFaq>
                </div>
                <div style={{marginTop:"100px",paddingBottom:"100px"}} className="container">
                    <LandingClientReview></LandingClientReview>
                </div>
            </div>
            <div style={{marginTop:"100px",marginBottom:"100px",backgroundColor:"#47CE7D"}} className="p-5">
                <div  className="container">
                    <LandingContact></LandingContact>
                </div>
            </div>
            <div style={{marginTop:"100px",marginBottom:"100px"}} className="container">
                <LandingClientLogo></LandingClientLogo>
            </div>
            <div  style={{marginTop:"100px"}} className="container">
                <LandingFooter></LandingFooter>
            </div>
        </div>
    );
};

export default Landing;