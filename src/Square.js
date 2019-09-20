import React, { Component } from 'react';
import './Square.css';

class Square extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(evt){
    this.props.toggleLight(this.props.coord);
  }
  render(){
    return(
      <div className={this.props.isOn === true ? 'Square Square--lit-up' : 'Square'} id={this.props.coord} onClick={this.handleClick}>
      </div>
    )
  }
}

export default Square;
