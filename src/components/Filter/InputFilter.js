import React, { PropTypes, Component } from 'react';

export default class InputFilter extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        return (
            <div className="Filter">
                <label htmlFor="filter">Filter</label>
                <input
                    type="search"
                    id="filter"
                    name="filter"
                    placeholder="Filter..."
                    value={this.props.filterText}
                    ref="filter"
                    onChange={this.handleChange}
                />
            </div>
        )
    }

    handleChange() {
        this.props.handleChange(this.refs.filter.value)
    }
}

InputFilter.propTypes = {
    handleChange: PropTypes.func.isRequired,
    filterText: PropTypes.string.isRequired
}

