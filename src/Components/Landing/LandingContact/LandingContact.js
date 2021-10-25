import React from 'react';
import './LandingContact.css'
import Merchant from '../../../assets/Landing/LandingContact/Merchant.png'
import Shopper from '../../../assets/Landing/LandingContact/Shopper.png'
import radioGreen from '../../../assets/Landing/LandingContact/radioGreen.png'
import radioWhite from '../../../assets/Landing/LandingContact/radioWhite.png'

const LandingContact = () => {


    const merchantStyle={
        width:"340px",
        height:"90px",
        backgroundColor:"#fff",
        borderRadius:"15px"
    }
    const shopperStyle={
        width:"340px",
        height:"90px",
        backgroundColor:"#47CE7D",
        border:"1px solid white",
        borderRadius:"15px"
    }


    return (
        <div className="my-4">
            <div >
                <div className="row">
                    <div className="col-md-5 d-flex flex-column justify-content-center align-items-center text-start">
                        <div>
                            <div className=" ms-2 mb-2">
                                <h1 style={{color: '#fff'}}>Contact Us</h1>
                            </div>
                            <div className="mt-4">
                                <div className="d-flex justify-content-start m-2 p-2" style={merchantStyle}>
                                    <div className="d-flex justify-content-center align-items-center ms-4">
                                        <img style={{width:"20%", height:"12%",marginRight:"15px"}} src={radioGreen} alt="" />
                                        <img style={{width:"55%", height:"32%"}} src={Merchant} alt="" />
                                    </div>
                                    <div className="ms-4 d-flex  flex-column justify-content-center ">
                                        <p style={{margin:"0",fontSize:"27px"}}>Merchant</p>
                                        <p style={{margin:"0",fontSize:"13px",marginBottom:"5px",color:"#80858B"}}>(I am interested in using Walio)</p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-start m-2 p-2" style={shopperStyle}>
                                    <div className="d-flex justify-content-center align-items-center ms-4">
                                        <img style={{width:"20%", height:"12%",marginRight:"15px"}} src={radioWhite} alt="" />
                                        <img style={{width:"55%", height:"32%"}} src={Shopper} alt="" />
                                    </div>
                                    <div className="ms-4 d-flex  flex-column justify-content-center ">
                                        <p style={{margin:"0",fontSize:"27px",color:"#fff"}}>Shopper</p>
                                        <p style={{margin:"0",fontSize:"13px",marginBottom:"5px",color:"#fff"}}> (I use crypto to make purchase <br/> online  at one of Walio merchants)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="d-flex justify-content-center">
                            <div style={{width:"85%"}}>
                                <div id="inputID">
                                    <div className="d-flex justify-content-end">
                                        <input class="form-control m-2" type="text" placeholder="name"/>
                                        <input class="form-control m-2" type="text" placeholder="email"/>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <input class="form-control m-2" type="text" placeholder="subject"/>
                                        <textarea id="textArea" class="form-control m-2" name="" id="" cols="30" rows="10" placeholder="Please provide as much detailed information as possible. Thank you">
                                        
                                        </textarea>
                                    </div>
                                    <div>
                                        <button style={{backgroundColor:"#6D5DD9",color:"#fff"}} className="btn mt-3 ms-2">Send Message</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingContact;