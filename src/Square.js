import React, { Component } from 'react';
import './Square.css';

class Square extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(evt){
    this.props.toggleLight(this.props.id);
  }
  render(){
    return(
      <div className={this.props.onStat === true ? 'Square Square--lit-up' : 'Square'} id={this.props.id} onClick={this.handleClick} position={this.props.pos} number={this.props.num}>
      </div>
    )
  }
}

export default Square;
