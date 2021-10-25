import React from 'react';
import HowWalioWorks from './HowWalioWorks/HowWalioWorks';
import LandingClientReview from './LandingClientReview/LandingClientReview';
import LandingFaq from './LandingFaq/LandingFaq';
import LandingClientLogo from './LandingClientLogo/LandinClientLogo'
import LandingFooter from './LandingFooter/LandingFooter';
import LandingContact from './LandingContact/LandingContact';
import './Landing.css';
import LandingNav from './Navigation/LandingNav';
import LandingHero from './Hero/LandingHero';
import LandingAbout from './LandingAbout/LandingAbout';
import LandingAboutExtend from './LandingAbout/LandingAboutExtend';

const Landing = () => {
    //#6D5DD9
    //#47CE7D 
    return (
        <div>
            <div className="topContainer">
                <div>
                    <LandingNav></LandingNav>
                </div>
                <div className="mt-4">
                    <div>
                        <LandingHero></LandingHero>
                    </div>
                </div>
                <div>
                    <LandingAbout></LandingAbout>
                </div>
            </div>
            <div  style={{marginTop:"50px",paddingBottom:"100px"}}>
                <LandingAboutExtend></LandingAboutExtend>
            </div>
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
            <div style={{marginTop:"100px",marginBottom:"100px",backgroundColor:"#47CE7D",borderRadius:"15px 0 0 15px"}} className="ms-4 p-4">
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