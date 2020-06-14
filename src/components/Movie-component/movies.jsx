import React, { Component } from 'react';
import movies from './movies-data';
import './movie-style.css'
class Movies extends Component {
    state = {
        movieSize: movies.length,
        movieData: movies
    }

    render() { 
        return (
            <React.Fragment>
                <p className="currentState">
                    {this.renderMsg()}
                </p>

                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody onClick={this.deleteItems}>
                        {this.renderItems()}
                    </tbody>
                </table>
            </React.Fragment>
        )
    }

    renderMsg() {
        if (this.state.movieSize > 0) {
            return `Showing ${this.state.movieSize} movies in the database.`;
        }else {
            this.deleteTable();
            return `There is no movies in the database.`;
        }
    }

    renderItems() {
        return this.state.movieData.map(movie => {
            return (
                <tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td>{movie.numberInStock}</td>
                    <td><button className="dlt">Delete</button></td>
                </tr>
            );
        });
    }

    deleteItems = (e) => {
        let el = e.target;
        if (el.className === "dlt") {
            let id = el.parentNode.parentNode.key;
            let movieDataCopy = [...this.state.movieData];
            let index = movieDataCopy.findIndex(el => el._id === id);
            movieDataCopy.splice(index, 1);
            this.setState({ 
                movieSize: this.state.movieSize - 1,
                movieData: movieDataCopy
            });
        }
    }

    deleteTable() {
        const table = document.querySelector('table');
        table.style.display = 'none';
    }
}
 
export default Movies;