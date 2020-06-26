import React, { Component } from "react";

import movies from "./movies-data";
import Pagination from "../common/pagination";
import { paginate } from "../utils/paginate";
import Genres from "../common/Genre";
import { genres } from "../Movie-component/movie.genre";
import Table from "../Table";

import "./movie-style.css";
class Movies extends Component {
  state = {
    movieSize: movies.length,
    movieData: movies,
    movieGenere: [{ _id: "", name: "All Genres" }, ...genres],
    selectedGenre: genres[0],
    moviePerPage: 3,
    currentPage: 1,
  };

  deleteMovie = e => {
    //init
    let id = e.target.parentNode.parentNode.id;
    let movieDataCopy = [...this.state.movieData];
    let index = movieDataCopy.findIndex(el => el._id === id);
    //delete the item form the state
    movieDataCopy.splice(index, 1);
    this.setState({ movieData: movieDataCopy });
    //update the movieSize in the state
    this.setState({ movieSize: this.state.movieSize - 1 });
  };

  handlePageChanges = page => {
    this.setState({ currentPage: page });
  };

  handleSelectedItem = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = type => {
    console.log(type);
  };

  render() {
    const { movieData, moviePerPage, currentPage, selectedGenre } = this.state;
    const filtredGenre =
      selectedGenre && selectedGenre._id
        ? movieData.filter(movie => movie.genre._id === selectedGenre._id)
        : movieData;

    const movies = paginate(filtredGenre, currentPage, moviePerPage);

    return (
      <React.Fragment>
        <p className="currentState">
          {filtredGenre.length === 0
            ? "There is no movie in the database"
            : `There is ${filtredGenre.length} movies in the database`}
        </p>

        <Genres
          data={this.state.movieGenere}
          onSelected={this.handleSelectedItem}
          currentGenre={this.state.selectedGenre}
        />

        <Table
          movies={movies}
          onDelete={this.deleteMovie}
          onSort={this.handleSort}
        />

        <Pagination
          moviePerPage={this.state.moviePerPage}
          movieSize={filtredGenre.length}
          handlePageChanges={this.handlePageChanges}
          currentPage={this.state.currentPage}
        />
      </React.Fragment>
    );
  }
}

export default Movies;
