import React, { Component } from 'react';
import movies from './movies-data';
import './style.css'
class Movies extends Component {
    movieSize = 5;

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

                    <tbody onClick={this.deleteItems}>
                        {this.renderItems()}
                    </tbody>
                </table>
            </React.Fragment>
        )
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

    deleteItems(e) {
        let el = e.target;
        if (el.className = "dlt") {
            let bodyTable = el.parentNode.parentNode.parentNode;
            let item = el.parentNode.parentNode;
            bodyTable.removeChild(item);
        }
    }
}
 
export default Movies;