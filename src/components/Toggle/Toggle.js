import React, { PropTypes, Component } from 'react';

export default class Toggle extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <li style={this.props.toggle ? {} : {opacity: '0.5'}}>
                {this.props.children}
                <button onClick={this.props.handleClick}>{this.props.toggle ? 'I desactivate' : 'I activate'}</button>
            </li>
        )
    }
}

Toggle.propTypes = {
    children: PropTypes.node.isRequired,
    handleClick: PropTypes.func.isRequired,
    itemToggleState: PropTypes.string
}

