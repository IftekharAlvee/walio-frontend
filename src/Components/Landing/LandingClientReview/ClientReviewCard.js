import React from 'react';
import img1 from '../../../assets/Landing/clientReview/icon1.png'
import img2 from '../../../assets/Landing/clientReview/icon2.png'
const ClientReviewCard = (props) => {
    const {id,clientName,reviewText} = props?.item;
    return (
        <div className="col">
            <div className="card p-3">
                <div className="mt-2 mb-5">
                    <img src={img1} alt="" />
                </div>
                <div className="my-4">
                    <p style={{color:"#80858B",fontSize:"17px"}}>{reviewText}</p>
                </div>
                <div className="mt-5">
                    <p><img className="me-2 img-fluid" src={img2} alt="" />{clientName}</p>
                </div>
            </div>
        </div>
    );
};

export default ClientReviewCard;