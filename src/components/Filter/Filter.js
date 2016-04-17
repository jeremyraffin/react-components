import React, { PropTypes } from 'react';
import InputFilter from './InputFilter.js';
import FilterableList from './FilterableList.js';

export default function Filter (props) {

    return (
        <div>
            <form>
                <fieldset>
                    <InputFilter filterText={props.filterText} handleChange={props.handleChange} />
                </fieldset>
            </form>
            <FilterableList className='Demo' items={props.items} filterText={props.filterText} />
        </div>
    );
}

Filter.propTypes = {
    items: PropTypes.array.isRequired
}




