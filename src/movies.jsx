import React, { Component } from 'react';
import movies from './movies-data';
import './style.css'
class Movies extends Component {
    render() { 
        return (
            <React.Fragment>
                <p className="currentState">Showing 5 movies in the database.</p>

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

                    <tbody>
                        {this.renderItems()}
                    </tbody>
                </table>
            </React.Fragment>
        )
    }

    renderItems() {
        return movies.map(movie => {
            return (
                <tr>
                    <td>{movie.title}</td>
                    <td>{movie.genere}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td>{movie.numberInStock}</td>
                    <td><button className="dlt">Delete</button></td>
                </tr>
            );
        });
    }
}
 
export default Movies;