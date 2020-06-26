import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

class Movie extends Component {
  toogleLike = e => {
    let el = e.target;
    if (!el.classList.contains("tst")) {
      el.classList.add("tst");
    } else {
      el.classList.remove("tst");
    }
  };

  render() {
    return (
      <tr id={this.props.data._id}>
        <td>
          <Link to={"/movies/" + this.props.data._id}>
            {this.props.data.title}
          </Link>
        </td>
        <td>{this.props.data.genre.name}</td>
        <td>{this.props.data.dailyRentalRate}</td>
        <td>{this.props.data.numberInStock}</td>
        <td>
          <span>
            <FontAwesomeIcon
              onClick={this.toogleLike}
              icon={faHeart}
              className="tst"
            />
          </span>
        </td>
        <td>
          <button className="dlt back" onClick={this.props.deleteItem}>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default Movie;
