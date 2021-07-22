import React from 'react';
import "./style.css";

function Tags() {
    return (
        <div className="tags-container">
            <h3>Tags: </h3>
            <ul className="genre-tags">
                <li>indie rock</li>
                <li>pop rock</li>
                <li>heavy metal</li>
            </ul>
        </div>
    );
}

export default Tags;