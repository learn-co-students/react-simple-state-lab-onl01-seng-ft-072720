import React, { Component } from 'react';

export default class Cell extends Component {
    constructor(props){
        super(props)
        this.state = {
            color: this.props.value
        }
    }

    toggleColor = (event) => {
        if (this.state.color ===  '#F00'){
            this.setState({color: "#333"})
        } else {
            this.setState({color: '#333'})
        }
    }

    render(){
        return(
            <div  onClick={this.toggleColor}  className='cell' style={{backgroundColor: `${this.state.color}`}}>
            </div>
        )
    }





}