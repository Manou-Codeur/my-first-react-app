import React, { Component } from 'react';
import movies from './movies-data';
import Movie from './Movie';
import './movie-style.css'
class Movies extends Component {
    state = {
        movieSize: movies.length,
        movieData: movies
    }

    deleteMovie = (e) => {
        //init
        let id = e.target.parentNode.parentNode.id;
        let movieDataCopy = [...this.state.movieData];
        let index = movieDataCopy.findIndex(el => el._id === id);
        //delete the item form the state
        movieDataCopy.splice(index, 1);
        this.setState({movieData: movieDataCopy});
        //update the movieSize in the state
        this.setState({movieSize: this.state.movieSize - 1})
    }
    
    deleteTable() {
        const table = document.querySelector('table');
        table.style.display = 'none';
    }

    renderMsg = () => {
        if (this.state.movieSize === 0) {
            this.deleteTable();
            return "There is no movie in the database";
        }
        else return `There is ${this.state.movieSize} movies in the database`
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
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.movieData.map(movie => {
                            return <Movie 
                            key={movie._id} 
                            data={movie} 
                            deleteItem={this.deleteMovie}/>
                        })}
                    </tbody>
                </table>

                
            </React.Fragment>
        )
    }

}
 
export default Movies;