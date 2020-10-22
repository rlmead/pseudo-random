import React from 'react';
import { ListGroupItem } from 'reactstrap';

function MenuItem(props) {
    return (
        <ListGroupItem >
            <div className='row'>
                <div className='col-10'>
                    <p style={{ fontWeight: 'bold' }}>{props.data.main}</p>
                    {(props.data.section === 'brunch' || props.data.section === 'dinner') && <p>with {props.data.extras}</p>}
                </div>
                <div className='col-2'>
                    <p>{props.data.price}</p>
                </div>
            </div>
        </ListGroupItem>
    )
}

export default MenuItem;