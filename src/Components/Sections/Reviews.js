import React from 'react';
import '../../SCSS/Reviews.scss';
import { reviews } from '../../data/reviewsData';
import { AiFillStar } from 'react-icons/ai';

const Reviews = ({ children }) => {
    const mappedReviews = reviews.map((review, index) => {
        return <Review key={index}> 
            <h3>{review.author},  {review.age}</h3>
            {review.text}
        </Review>
    });

    return (
        <div className="main-section" id="reviews-section">
            {children}
            <div className="reviews-body">{mappedReviews}</div>
            
        </div>
    )
};

export default Reviews;

const Review = ({ children }) => {
    return <div className="review">
        {children}
        <div className="stars">
            <AiFillStar color={"#FFED67"} />
            <AiFillStar color={"#FFED67"} />
            <AiFillStar color={"#FFED67"} />
            <AiFillStar color={"#FFED67"} />
            <AiFillStar color={"#FFED67"} />
        </div>
    </div>
}