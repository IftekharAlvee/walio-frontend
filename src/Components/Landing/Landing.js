import React from 'react';
import HowWalioWorks from './HowWalioWorks/HowWalioWorks';
import LandingFaq from './LandingFaq/LandingFaq';

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
                <div>
                    
                </div>
            </div>
        </div>
    );
};

export default Landing;