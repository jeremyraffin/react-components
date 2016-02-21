import React, { Component } from 'react';
import Filter from './components/Filter/Filter.js';

export class App extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state= {
            filterText: ''
        }
    }

    render() {

        const items = [
            {id: 0, name: 'Chelsea'},
            {id: 1, name: 'Arsenal'},
            {id: 2, name: 'Manchester United'},
            {id: 3, name: 'Liverpool'}
        ]

        return (
            <div>
                <header>
                    <h1>React components</h1>
                </header>
                <main>
                    <section>
                        <h2>Search filter</h2>
                        <Filter items={items} filterText={this.state.filterText} handleChange={this.handleChange} />
                    </section>
                    <section>
                        <h2>ToggleState</h2>
                    </section>
                </main>
            </div>
        );
    }

    handleChange(filterText){
        this.setState({
            filterText: filterText
        });
    }
}



