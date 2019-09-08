import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'WZvxiC7s8xWD2ZVH7QxnW2gdVlAs7KBA';

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    

    state = {
        searchTerm: '',
        reviews : []
    }

    handleSubmit = (searchTerm) => {
        this.fetchReviews(searchTerm)
    }

    handleChange = (e) => {
        this.setState({searchTerm: e.target.searchTerm})
    }

    render() {
        return (
            <div className='searchable-movie-reviews'>
                <form onSubmit={this.handleSubmit(this.state.searchTerm)}>
                    <input type='text' value={this.state.searchTerm} onChange={this.handleChange} />
                    <input type='submit' value='Submit' />
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }


    fetchReviews(search) {
        fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}?api-key=${NYT_API_KEY}`)
          .then(response => response.json())
          .then(data => {
            // console.log(data.results[0])
            let count = 0
            let reviews = []
            for (const review in data.results[0]) {
                while (count < 3) {
                    reviews.push(review.headline)
                }
            }
            this.setState({
              reviews: reviews
            })
            console.log(this.state.reviews)
          })
      }

}

export default SearchableMovieReviewsContainer