import React from 'react';

import './genre.css';

const Genre = (props) => {
    return ( 
        <div className="genre">
            {props.data.map(genre => (
                <h2 key={genre._id} onClick={props.onSelected.bind(this, genre)} className={genre.name === props.currentGenre.name ? 'activeGenre' : null}>{genre.name}</h2>
            ))}
        </div>
    );
}
 
export default Genre;