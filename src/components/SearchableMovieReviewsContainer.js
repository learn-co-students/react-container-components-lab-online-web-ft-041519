import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearcheableMovieReviewsContainer extends Component {
  state = {
    searchTerm: "",
    reviews: []
  };

  handleSearch = event =>
    this.setState({ serachTerm: event.target.value });

  handleSubmit = event => {
    event.preventDefault();

  fetch(URL.concat(this.state.searchTerm))
    .then(res => res.json())
    .then(res => this.setState({ reviews: res.results }));
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="search-input">Search Movie Reviews</label>
          <input id="search" type="text" onChange={this.handleSearch} />
          <button type="submit">Submit</button>
        </form>
        {typeof this.state.reviews === 'object' &&
        this.state.reviews.length > 0 && <h1>Movie Review By Search:</h1>}
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default SearcheableMovieReviewsContainer;
