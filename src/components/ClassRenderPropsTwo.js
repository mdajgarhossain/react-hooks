import React, { Component } from 'react'

class ClassRenderPropsTwo extends Component {
    render() {
        return (
            <div>
                <h2 onMouseOver={this.props.incrementCount}>Hovered {this.props.count} times</h2>
            </div>
        )
    }
}

export default ClassRenderPropsTwo