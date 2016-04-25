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
                        onChange={props.onChange}
                    />
            })}
        </div>
    )
}


RadioGroup.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    group: PropTypes.string.isRequired,
    defaultChecked: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

