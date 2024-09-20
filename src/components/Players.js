import React from 'react';

export default function Players(props) {
    return (
        <div className={`grid-container ${props.name === 'currentUser' ? 'spotlight' : ''}`}>
            <p>{props.index}</p>
            <p className={props.name === 'anonymous' ? 'anon' : ''}>{props.name}</p>
            <p>{props.points}</p>
        </div>
    )
}