import React, { Component } from 'react';
import Filter from './components/Filter/Filter.js';
import Toggle from './components/Toggle/Toggle.js';
import RadioGroup from './components/RadioGroup/RadioGroup.js';

export class App extends Component {
    constructor(props) {
        super(props);
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.handleRadioChange = this.handleRadioChange.bind(this);
        this.state = {
            toggleItems: [
                {id: 0, name: 'Chelsea', active: false},
                {id: 1, name: 'Arsenal', active: false},
                {id: 2, name: 'Manchester United', active: false},
                {id: 3, name: 'Liverpool', active: false}
            ],
            filterItems: [
                {id: 0, name: 'Chelsea'},
                {id: 1, name: 'Arsenal'},
                {id: 2, name: 'Manchester United'},
                {id: 3, name: 'Liverpool'}
            ],
            filterText: '',
            radioItems: [
                {name: 'item1', defaultChecked: true},
                {name: 'item2'},
                {name: 'item3'}
            ],
            selectedRadio: 'item1'
        }
    }

    render() {
        
        const toggleItems = this.state.toggleItems.map(item => {
            return  <li>
                        <Toggle key={item.id} active={item.active} onClick={this.handleToggle.bind(this, item)}>
                            {item.name}
                        </Toggle>
                    </li>
        });

        return (
            <div>
                <header>
                    <h1>React components</h1>
                </header>
                <main>
                    <section>
                        <h2>Search filter</h2>
                        <Filter items={this.state.filterItems} filterText={this.state.filterText} handleChange={this.handleFilterChange} />
                    </section>
                    <section>
                        <h2>ToggleState</h2>
                        <ul>
                            {toggleItems}
                        </ul>
                    </section>
                    <section>
                        <h2>RadioGroup</h2>
                        <RadioGroup group="demo" items={this.state.radioItems} onChange={this.handleRadioChange} />
                    </section>
                </main>
            </div>
        );
    }

    handleFilterChange(event) {
        this.setState({
            filterText: event.target.value
        });
    }

    handleRadioChange(event) {
        this.setState({
            selectedRadio: event.target.value
        })
    }

    handleToggle(item) {
        console.log(item);
        this.state.toggleItems[item.id].active = !this.state.toggleItems[item.id].active;
        this.setState({
            toggleItems: this.state.toggleItems
        })
    }

}



