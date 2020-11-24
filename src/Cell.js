import React, { Component } from 'react';

export default class Cell extends Component {
        constructor(props) {
            super()
            this.state = {
                color: props.value
            }
        }

        changeBgColor = () => {
            this.setState({
                color: '#333'
            })
        }



        render() {
            return (
            <div  
            className='cell'
            onClick={this.changeBgColor} 
            style={{backgroundColor: this.state.color}}>
            </div>
            )
        }
}