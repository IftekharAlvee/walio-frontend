import React from 'react';
import bitcoinImg from '../../../assets/Landing/LandingHero/bitcoin.png'
import walletImg from '../../../assets/Landing/LandingHero/Wallet.png'

const LandingAboutExtend = () => {
    return (
        <div className="container p-5">
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="d-flex mb-4">
                            <div className="me-3">
                                <img style={{width:"30px"}}  src={walletImg}  alt="" />
                            </div>
                            <h2 style={{color: '#00B5F8'}}>Competitive Edge</h2>
                        </div>
                        <p className="mb-4" style={{color: '#80858B'}}>Gain a competitive edge over your competition by integrating and accepting crypto payments for your products and services and widen your businesses customer reach to over 100+ Million cryptocurrency users!</p>
                        <h5 style={{color:"#47CE7D"}}>At the end of the payment you still receive Bitcoin! </h5>
                    </div>
                    <div className="col-md-6">
                            <div className="d-flex mb-4">
                                <div className="me-3">
                                <img style={{width:"30px"}} src={bitcoinImg} alt="" />
                                </div>
                                <h2 style={{color: '#00B5F8'}}>Bridged Network Technology</h2>
                            </div>
                            <p style={{color: '#80858B'}}>Empower your customers in how they spend their cryptocurrency. Walio offers a unique bridge blockchain payment system. If you accept a payment in Bitcoin for example, your customer can choose to pay in Bitcoin on the Bitcoin Mainnet, Bitcoin on the Binance Chain, or Binance Smart Chain, or in Wrapped Bitcoin on the Ethereum Blockchain.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingAboutExtend;