import React, { PropTypes } from 'react';

export default function Radio (props) {

    return (
        <label htmlFor={props.name} >
            <input id={props.name}
                   type="radio"
                   name={props.group}
                   value={props.name}
                   defaultChecked={props.defaultChecked}
                   onChange={props.onChange}
            />
                {props.name}
        </label>
    )
}


Radio.propTypes = {
    name: PropTypes.string.isRequired,
    group: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    defaultChecked: PropTypes.bool,
    checked: PropTypes.bool
};

