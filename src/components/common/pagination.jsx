import React from 'react';
import './pagination.css';

const Pagination = (props) => {

    const {moviePerPage, movieSize, handlePageChanges, currentPage} = props;
    const numberOfPaginationEl = Math.ceil(movieSize / moviePerPage);
    if (numberOfPaginationEl === 1) return null;
    const arrOfEls = [];
  
    for (let i=1; i<=numberOfPaginationEl; i++) {
        arrOfEls.push(i);
    }
    
    return (
        <div className="pagination">
          {arrOfEls.map(page => (
              <p key={page} onClick={handlePageChanges.bind(this, page)} className={currentPage === page ? 'active' : null}>{page}</p>
          ))}  
        </div>
    );
}

export default Pagination;