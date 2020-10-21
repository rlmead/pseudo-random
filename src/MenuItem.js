import React from 'react';

function MenuItem(props) {
    return (
        <div>
            <h4>{props.data.name}</h4>
            <p>{props.data.sides}</p>
            <h5>{props.data.price}</h5>
        </div>
    )
}

export default MenuItem;