import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
require('es6-promise').polyfill();
require('isomorphic-fetch');

const NYT_API_KEY = 'uOkgL2NoSU7AWOk8z1QR5mMtgX5lkEti';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

export default class LatestMovieReviewsContainer extends React.Component {
    
    constructor (props) {
        super(props)

        this.state = {
            reviews: []
        }
    } 

    article_fetch = () => {
    
        fetch(URL)
        .then(res => res.json())
        .then(stories => {
          this.setState({
            reviews: stories.results
          })
        });

    }
    
    componentDidMount() {
        this.article_fetch()
    } 

    render() {
        return (
            <div className="latest-movie-reviews" ><MovieReviews reviews={this.state.reviews} /></div>
        )
    } 

}