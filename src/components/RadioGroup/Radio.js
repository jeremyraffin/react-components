import React, { PropTypes } from 'react';

export default function Radio (props) {

    return (
        <label htmlFor={props.name} >
            <input id={props.name}
                   type="radio"
                   name={props.group}
                   value={props.name}
                   defaultChecked={props.defaultChecked}
                   onChange={props.handleChange}
            />
                {props.name}
        </label>
    )
}


Radio.propTypes = {
    name: PropTypes.string,
    group: PropTypes.string,
    checked: PropTypes.bool
}

