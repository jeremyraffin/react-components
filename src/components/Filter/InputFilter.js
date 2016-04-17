import React, { PropTypes } from 'react';

export default function InputFilter (props) {

    return (
        <div className="Filter">
            <label htmlFor="filter">Filter</label>
            <input
                type="search"
                id="filter"
                name="filter"
                placeholder="Filter..."
                value={props.filterText}
                onChange={props.handleChange}
            />
        </div>
    )
}

InputFilter.propTypes = {
    handleChange: PropTypes.func.isRequired,
    filterText: PropTypes.string.isRequired
}

