import React, { Component } from 'react';

class UseEffectOne extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`;
        console.log('componentDidMount');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Updating document title');
        document.title = `Clicked ${this.state.count} times`;
        console.log('componentDidUpdate');
    }

    render() {
        return (
            <div>
                
                <button 
                    onClick={() => this.setState({count: this.state.count + 1})}
                >
                    Click {this.state.count} times
                </button>
            </div>
        );
    }
}

export default UseEffectOne;