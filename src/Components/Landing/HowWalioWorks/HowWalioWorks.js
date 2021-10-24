import React from 'react';
import WalioWorkCard from './WalioWorkCard';
import workData from './walioWorkCardData'
const HowWalioWorks = () => {
    //#6D5DD9
    const hStyle ={
        color: "#6D5DD9",
        fontSize: "35px",
    }
    return (
        <div >
            <div className="my-5">
                <h1 style={hStyle}>How Walio works?</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-4 g-3 my-5">
                    {
                        workData.map(item => <WalioWorkCard item={item}></WalioWorkCard>)
                    }
            </div>
        </div>
    );
};

export default HowWalioWorks;