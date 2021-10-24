import React from 'react';
import './LandingContact.css'

const LandingContact = () => {


    const merchantStyle={
        width:"340px",
        height:"90px",
        backgroundColor:"#fff",
    }


    return (
        <div className="my-4">
            <div >
                <div className="row">
                    <div className="col-md-5 d-flex flex-column justify-content-center align-items-center text-start">
                        <div className="mb-5">
                            <h1 style={{color: '#fff'}}>Contact Us</h1>
                        </div>
                        <div>
                            <div style={merchantStyle}>
                                <p>Merchant</p>
                                <p></p>
                            </div>
                            <div>
                                Shopper
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