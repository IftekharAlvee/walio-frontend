import React from 'react';

const WalioWorkCard = (props) => {
    const {id,imageUrl,cardText,imgTop} = props?.item;
    const cardStyle = {

    }
    return (
        <div className="col">
            <div className=" h-100 text-center">
                <div className="d-flex justify-content-start my-2">
                    <img src={imgTop} alt="" />
                </div>
                <div className="d-flex justify-content-center">
                    <img className="img-fluid p-5" src={imageUrl} alt="" />
                </div>
                <div className="mt-5">
                    <p>{cardText}</p>
                </div>
        </div>
        </div>
    );
};

export default WalioWorkCard;