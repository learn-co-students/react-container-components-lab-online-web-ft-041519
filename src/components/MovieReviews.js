// Code MovieReviews Here
import React from 'react';

const MovieReviews = ({ reviews }) =>
    <ul className="review-list">
        {reviews.map(review => <li className="review">{review.display_title}</li>)}
    </ul>;


export default MovieReviews;