import React, { PropTypes, Component } from 'react';

export default class FilterableList extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        let items = []

        this.props.items.forEach(item => {
            if(item.name.indexOf(this.props.filterText) === -1) {
                return
            }
            items.push(<li key={item.name}>{item.name}</li>)
        })

        return (
            <ul className={this.props.className}>
                {items}
            </ul>
        )
    }
}

FilterableList.propTypes = {
    items: PropTypes.array.isRequired,
    filterText: PropTypes.string.isRequired,
    listClassName: PropTypes.string
}

