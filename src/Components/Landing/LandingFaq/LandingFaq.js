import React from 'react';

const LandingFaq = () => {

    const FaqList = [
        {
            text:"I have a brick and mortar business, can I use Walio?"
        },
        {
            text:"Can I include tax and shipping on my payments?"
        },
        {
            text:"I sent 2 payments to the same payment address"
        }
    ]


    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <h1 style={{color:"#6D5DD9",fontSize:"35px"}}>FAQ</h1>
                    <p>More questions? Check out our full <span style={{color:"#47CE7D",textDecoration: "underline"}}>FAQ</span></p>
                </div>
                <div className="col-md-6">
                    <div>
                        {
                            FaqList?.map(item => (
                                <div className="d-flex justify-content-between">
                                    <p>{item?.text}</p>
                                    <p style={{color:"#6D5DD9",fontSize:"20px"}}>+</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingFaq;