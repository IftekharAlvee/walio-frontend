import React from 'react';
import ClientReviewCard from './ClientReviewCard';

const LandingClientReview = () => {

    const reviewData = [
        {
            id:1,
            clientName:"Maya Halin",
            reviewText:"This product has a bunch of amazing tools which improves our business."
        },
        {
            id:2,
            clientName:"Leopold Nilsen",
            reviewText:"Wow! Using Walio has helped our company constantly improve."
        },
        {
            id:3,
            clientName:"Felicia Satzke",
            reviewText:"This product helped me grow my business by inbound marketing and sales education."
        },
    ]

    return (
        <div>
            <div className="text-center">
                <h1 style={{color:"#6D5DD9",fontSize:"40px"}} className="mb-4">What our clients say</h1>
                <p style={{color:"#80858B",fontSize:"20px"}}>Over 20.000 clients use Walio to understand their business and their market better.</p>
            </div>
            <div >
                <div className="row row-cols-1 row-cols-md-3 g-4 my-5">
                    {
                        reviewData?.map(item => <ClientReviewCard item={item}></ClientReviewCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default LandingClientReview;