import React from 'react';
import HowWalioWorks from './HowWalioWorks/HowWalioWorks';
import LandingFaq from './LandingFaq/LandingFaq';

const Landing = () => {
    return (
        <div>
            <div className="my-5 container">
                <HowWalioWorks></HowWalioWorks>
            </div>
            <div className="my-5 container">
                <LandingFaq></LandingFaq>
            </div>
        </div>
    );
};

export default Landing;