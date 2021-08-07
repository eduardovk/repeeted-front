import React from 'react';
import "./style.css";
import { Link } from "react-router-dom";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io'

function Paginator({ props }) {

    const { currentPage, totalPages, hasPrevious, hasNext, link } = props;

    if (currentPage && totalPages) {
        return (
            <div className="paginator">
                {hasPrevious && (<div className="previous-page">
                    <Link className="no-decor" to={link + (currentPage - 1)} >
                        <IoIosArrowDropleftCircle size={35} />
                    </Link>
                </div>)}
                {hasNext && (<div className="next-page">
                    <Link className="no-decor" to={link + (currentPage + 1)} >
                        <IoIosArrowDroprightCircle size={35} />
                    </Link>
                </div>)}
            </div>
        );
    }
    return <></>;
}

export default Paginator;