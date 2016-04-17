import React, { PropTypes } from 'react';
import Radio from './Radio.js';

export default function RadioGroup (props) {

    return (
        <div className="RadioGroup">
            {props.items.map((item,index) => {

                return <Radio
                    key={index}
                    name={item.name}
                    value={item.name}
                    group={props.group}
                    defaultChecked={item.defaultChecked}
                    handleChange={props.handleChange}
                    />
            })}
        </div>
    )
}


RadioGroup.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
    onChange: PropTypes.func
}

