import React, { PropTypes, Component } from 'react';
import InputFilter from './InputFilter.js';
import FilterableList from './FilterableList.js';

export default class Filter extends Component {
    constructor(props){
        super(props);
    }

    render() {

        return (
            <div>
                <form>
                    <fieldset>
                        <InputFilter filterText={this.props.filterText} handleChange={this.props.handleChange} />
                    </fieldset>
                </form>
                <FilterableList className='Demo' items={this.props.items} filterText={this.props.filterText} />
            </div>
        );
    }

    handleChange(filterText){
        this.setState({
            filterText: filterText
        });
    }
}

Filter.propTypes = {
    items: PropTypes.array.isRequired
}




