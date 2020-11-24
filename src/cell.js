import React, { Component } from 'react';

export default class Cell extends Component {
    constructor(props) {
        super()
        this.state = {
            color: props.value,
        }
        this.originalColor = props.value
    }

    changeColor = () => {
        if (this.state.color === this.originalColor) {
            this.setState({color: '#333'})
        } else {
            this.setState({color: this.originalColor})
        }
    }

    render() {
        return (
            <div className='cell' style={{backgroundColor: this.state.color}} onClick={this.changeColor}></div>
        )
    }
}

// changeColor = () => {
//     if (this.state.currentColor === this.state.originalColor) {
//         this.setState({currentColor: '#333'})
//     } else {
//         this.setState({currentColor: this.state.originalColor})
//     }
// }