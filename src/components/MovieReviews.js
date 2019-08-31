import React from 'react';

  const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;

  MovieReviews.defaultProps = {
    reviews: []
  };

  const Review = ({
    headline,
    by,
    link,
    short_summary
  }) => {
    return (
      <div
      key={headline}
      className="review">
        <header>
          <a className="review-link" href={link.url}> {headline}</a>
          <span className="author">{by}</span>
        </header>
        <blockquote>{short_summary}</blockquote>
      </div>
    );
  };

export default MovieReviews;
