import React, { Component } from 'react';
import Cell from './cell.js'

export default class Matrix extends Component {
  
  genRow = (vals) => {
    return vals.map(val => <div className="cell"></div>) // replace me and render a cell component instead!
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
Matrix.defaultProps = {
  values: (() => {
    const row = ['#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00',]
    return (new Array(10).fill(row))
  })()
}
// Matrix
// Matrix should use its prop, values, to determine its cell colors. This is a 10 x 10 array (essentially making 10 rows, with 10 values in each row). 
// Because we are responsible React developers, we want to make sure we have a default grid in case no values prop is passed.

// Make a default values prop for Matrix, which is a 10x10 array filled with the values '#F00' (red). For inspiration, take a look at src/data.js.
// Once you have made your Cell component, replace the return value in genRow's map to: <Cell value={val} />. 
// Here we are specifying our Cell component should have a value prop.
