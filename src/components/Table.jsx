import React from 'react';

import Movie from './Movie-component/Movie';

const Table = (props) => {

    const {movies, onDelete, onSort} = props

    return ( 
        <table>
            <thead>
                <tr>
                    <th onClick={onSort.bind(this, 'title')}>Title</th>
                    <th onClick={onSort.bind(this, 'genre')}>Genre</th>
                    <th onClick={onSort.bind(this, 'stock')}>Stock</th>
                    <th onClick={onSort.bind(this, 'rate')}>Rate</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {movies.map(movie => {
                    return <Movie 
                    key={movie._id} 
                    data={movie} 
                    deleteItem={onDelete}/>
                })}
            </tbody>
        </table>
    );
}
 
export default Table;