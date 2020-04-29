import React from 'react';

const CardAction = ({ action }) => {
    return (
        <li>
            <div className="member-container">
                <div className="card-member small-size">VR</div>
            </div>
            <p>
                <span className="member-name">Victor Reyes</span>{` ${action.description} `}<small>yesterday at 4:53 PM</small>
            </p>
        </li>
    )
}

export default CardAction;