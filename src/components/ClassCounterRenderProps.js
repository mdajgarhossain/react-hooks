import React, { Component } from 'react'

class ClassCounterRenderProps extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState(prevState => {
            return {count: prevState.count + 1}
        })
    }

    render() {
        return (
            <div>
                {this.props.renderProps(this.state.count, this.incrementCount)}
            </div>
        )
    }
}

export default ClassCounterRenderProps