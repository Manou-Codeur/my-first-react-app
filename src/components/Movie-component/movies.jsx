import React, { Component } from 'react';
import movies from './movies-data';
import './movie-style.css'
class Movies extends Component {
    state = {
        movieSize: 5
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
        return movies.map(movie => {
            return (
                <tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genere}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td>{movie.numberInStock}</td>
                    <td><button className="dlt">Delete</button></td>
                </tr>
            );
        });
    }

    deleteItems = e => {
        let el = e.target;
        if (el.className === "dlt") {
            let bodyTable = el.parentNode.parentNode.parentNode;
            let item = el.parentNode.parentNode;
            bodyTable.removeChild(item);
            this.setState({ movieSize: this.state.movieSize - 1 });
        }
    }

    deleteTable() {
        const table = document.querySelector('table');
        table.style.display = 'none';
    }
}
 
export default Movies;