import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ count, onPageChange }) => {
    return (
        <>
            {count > 1 &&
                <ReactPaginate
                    previousLabel={'قبلی'}
                    nextLabel={'بعدی'}
                    breakLabel={'...'}
                    pageCount={count}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    breakClassName={'   px-4 mx-2 py-1 rounded-md '}
                    containerClassName={'flex items-center justify-center border-gray-500 px-2 mx-2 py-1 rounded-md '}
                    previousClassName={'  px-2 mx-2 py-2 rounded-md font-bold'}
                    previousLinkClassName={'border-gray-400 text-black px-2 mx-2 border-l-2 '}
                    nextClassName='  px-2 mx-2 py-2  rounded-md font-bold'
                    nextLinkClassName={'border-r-2 border-gray-400 text-black px-2 mx-2  '}
                    renderOnZeroPageCount={true}
                    pageLinkClassName={" border-gray-500  px-4 mx-2 py-1 rounded-md "}
                    activeLinkClassName='bg-slate-800 text-white rounded'
                    onPageChange={onPageChange} />}

        </>
    );
}

export default Pagination;