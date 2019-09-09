import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

    class SearchableMovieReviewsContainer extends Component {
      state = {
        searchTerm: '',
        reviews: []
      }

      handleChange = (e) => {
        this.setState({searchTerm: e.target.searchTerm})
      }

      handleSubmit = (searchTerm) => {
        this.fetchReviews(searchTerm)
      }

      render() {
        return (
          <div className="searchable-movie-reviews">
            <form onSubmit={this.handleSubmit(this.state.searchTerm)}>
              <input type="text" value={this.state.searchTerm} onChange={this.handleChange}/>
              <input type="submit" value="Submit"/>
            </form>
            <MovieReviews reviews={this.state.reviews}/>
          </div>
        )
      }

      fetchReviews(search) {
        fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}?api-key=${NYT_API_KEY}`)
        .then(resp => resp.json())
        .then(resp => {

        })
      }
    }

    export default SearchableMovieReviewsContainer;
