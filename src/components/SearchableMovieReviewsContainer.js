import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'uOkgL2NoSU7AWOk8z1QR5mMtgX5lkEti';
const SEARCH_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=';

export default class SearchableMovieReviewsContainer extends React.Component {

    constructor (props) {
        super(props)

        this.state = {
            reviews: [],
            searchTerm: ''
        }

    } 

    search_fetch = (query) => {
        fetch(`${SEARCH_URL}${query}&api-key=${NYT_API_KEY}`)
        .then(res => res.json())
        .then(stories => {
          this.setState({
            reviews: stories.results
          }) 
        }); 
    }

    handleSubmit(event) {
        event.preventDefault(); 
        this.search_fetch(this.state.searchTerm)
      }

    changeHandler = (event) => {
        this.setState({searchTerm: event.target.value})
    }

    render() {
        return (
        <div className="searchable-movie-reviews">
            <form onSubmit={this.handleSubmit.bind(this)} >
                <label>Movie Search:</label>
                <input type="text" name="search" onChange={this.changeHandler} ></input>
                <input type="submit" value="Submit"></input>
            </form>

            <MovieReviews reviews={this.state.reviews} />
        
        </div>
        )
    }
    
}