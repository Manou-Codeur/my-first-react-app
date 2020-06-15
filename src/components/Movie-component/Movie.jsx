import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {faHeart} from '@fortawesome/free-regular-svg-icons';

class Movie extends Component {
    render() { 
        return ( 
            <tr>
                <td>{this.props.data.title}</td>
                <td>{this.props.data.genre.name}</td>
                <td>{this.props.data.dailyRentalRate}</td>
                <td>{this.props.data.numberInStock}</td>
                <td><span><FontAwesomeIcon icon={faHeart} /></span></td>
                <td><button className="dlt" onClick={this.props.deleteItem}>Delete</button></td>
            </tr>
        );
    }
}
 
export default Movie;