import React, { PropTypes } from 'react';

require ('./css/Toggle.css');

export default function Toggle (props)  {

    return (
        <div className="Toggle" style={props.active ? {} : {opacity: '0.5'}}>
            {props.children}
            <button onClick={props.onClick}>{props.active ? 'I desactivate' : 'I activate'}</button>
        </div>
    )
}

Toggle.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func.isRequired,
    active: PropTypes.bool
};

