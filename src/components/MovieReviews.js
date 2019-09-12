import React from 'react'

const MovieReviews = (props) => (<div className="review-list" >
        {props.reviews && props.reviews.map(pics => <div className="review"> {pics.display_title} </div>)}
</div>)

export default MovieReviews;