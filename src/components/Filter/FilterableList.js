import React, { PropTypes } from 'react';

export default function FilterableList (props) {

    let items = []

    props.items.forEach(item => {
        if(item.name.toLowerCase().indexOf(props.filterText) !== -1) {
            items.push(<li key={item.name}>{item.name}</li>)
        }

    })

    return (
        <ul className={props.className}>
            {items}
        </ul>
    )
}

FilterableList.propTypes = {
    items: PropTypes.array.isRequired,
    filterText: PropTypes.string.isRequired,
    listClassName: PropTypes.string
}

