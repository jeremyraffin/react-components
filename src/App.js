import React, { Component } from 'react';
import Filter from './components/Filter/Filter.js';
import Toggle from './components/Toggle/Toggle.js';

export class App extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.state = {
            items: [
                {id: 0, name: 'Chelsea', active: false},
                {id: 1, name: 'Arsenal', active: false},
                {id: 2, name: 'Manchester United', active: false},
                {id: 3, name: 'Liverpool', active: false}
            ],
            filterText: ''
        }
    }

    render() {

        const items = this.state.items.map(item => {
            return <Toggle key={item.id} toggle={item.active} handleClick={this.handleToggle.bind(this, item)}>
                        {item.name}
                    </Toggle>
        });

        return (
            <div>
                <header>
                    <h1>React components</h1>
                </header>
                <main>
                    <section>
                        <h2>Search filter</h2>
                        <Filter items={this.state.items} filterText={this.state.filterText} handleChange={this.handleChange} />
                    </section>
                    <section>
                        <h2>ToggleState</h2>
                        <ul>
                            {items}
                        </ul>
                    </section>
                </main>
            </div>
        );
    }

    handleChange(filterText) {
        this.setState({
            filterText: filterText
        });
    }

    handleToggle(item) {
        this.state.items[item.id].active = !this.state.items[item.id].active;
        this.setState({
            items: this.state.items
        })
    }

}



