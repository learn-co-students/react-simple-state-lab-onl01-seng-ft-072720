import React, { Component } from 'react';

export default class Matrix extends Component {
  
  genRow = (vals) => {
    return vals.map(val => <Cell value={val} />) // replace me and render a cell component instead!
  }
  
  genMatrix = () => {
    return this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  }
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}

//Make a default values prop for Matrix, which is a 10x10 array filled 
//with the values '#F00' (red). For inspiration, take a look at src/data.js.

Matrix.defaultProps = {
  values: (() => {
    const defRow = ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
    return (new Array(10).fill(defRow))
  })()
}