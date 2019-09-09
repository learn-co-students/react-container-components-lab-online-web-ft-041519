import React from 'react'

//component outputs a top-level element with the class review-list
//each review is wrapped by an element with class review

const MovieReviews = ({ reviews }) =>
  <ul className="review-list">
    {reviews.map(review => <li className="review">{review.display_title}</li>)}
  </ul>


export default MovieReviews;
