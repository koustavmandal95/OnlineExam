import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
const Pagination = ({postsPerPage,totalPosts,paginate}) => {
    const pageNumbers = [];
    for(let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++){
        pageNumbers.push(i);
    }
    return (
        <nav className="mt-5">
            <ul className="pagination">
            {pageNumbers.map(number =>(
                <li key={number} className="page-item">
                    <a href={number} onClick={(e) =>{ e.preventDefault();  paginate(number)}} className="page-link text-dark md">
                        {number}
                    </a>
                </li>
            ))}
            </ul>
        </nav>
    )
}
export default Pagination;
