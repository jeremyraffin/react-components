import React, { PropTypes } from 'react';

export default function Toggle (props)  {


    return (
        <li style={props.toggle ? {} : {opacity: '0.5'}}>
            {props.children}
            <button onClick={props.handleClick}>{props.toggle ? 'I desactivate' : 'I activate'}</button>
        </li>
    )
}

Toggle.propTypes = {
    children: PropTypes.node.isRequired,
    handleClick: PropTypes.func.isRequired,
    itemToggleState: PropTypes.string
}

