import React, { Component } from 'react';
import './Gameboard.css';
import Square from './Square.js';

class Gameboard extends Component {
  static defaultProps = {
    squareCount: 16
  }
  state = {
    gameboard: ['l', 'ml', 'mr','r', 'l', 'ml', 'mr','r', 'l', 'ml', 'mr','r', 'l', 'ml', 'mr','r']
  }

  constructor(props){
    super(props);
    this.toggleLight = this.toggleLight.bind(this);
  }

  toggleLight(sq){
    let curSquare = document.getElementById(sq);
    let numT = (Number(curSquare.getAttribute('number')) - 4)
    let numR = (Number(curSquare.getAttribute('number')) + 1)
    let numB = (Number(curSquare.getAttribute('number')) + 4)
    let numL = (Number(curSquare.getAttribute('number')) - 1)

    if(!curSquare.classList.contains('Square--lit-up')){
      curSquare.classList.add('Square--lit-up');

      let posL = (curSquare.getAttribute('position') !== 'l') ?
      document.querySelectorAll(`[number="${numL}"]`)[0].classList.toggle('Square--lit-up') : null;

      let posR = (curSquare.getAttribute('position') !== 'r') ?
      document.querySelectorAll(`[number="${numR}"]`)[0].classList.toggle('Square--lit-up') : null;

      let posT = (Number(curSquare.getAttribute('number')) > (this.props.squareCount / 4) - 1) ?
      document.querySelectorAll(`[number="${numT}"]`)[0].classList.toggle('Square--lit-up') : null;

      let posB = (Number(curSquare.getAttribute('number')) < this.props.squareCount - 4) ?
      document.querySelectorAll(`[number="${numB}"]`)[0].classList.toggle('Square--lit-up') : null;

    } else {
      curSquare.classList.remove('Square--lit-up')
      let posL = (curSquare.getAttribute('position') !== 'l') ?
      document.querySelectorAll(`[number="${numL}"]`)[0].classList.toggle('Square--lit-up') : null;

      let posR = (curSquare.getAttribute('position') !== 'r') ?
      document.querySelectorAll(`[number="${numR}"]`)[0].classList.toggle('Square--lit-up') : null;

      let posT = (Number(curSquare.getAttribute('number')) > (this.props.squareCount / 4) - 1) ?
      document.querySelectorAll(`[number="${numT}"]`)[0].classList.toggle('Square--lit-up') : null;

      let posB = (Number(curSquare.getAttribute('number')) < this.props.squareCount - 4) ?
      document.querySelectorAll(`[number="${numB}"]`)[0].classList.toggle('Square--lit-up') : null;
    }
  }

  render(){
    return (
      <div className="Gameboard">
        <h1 className="Gameboard--heading">Lights Out</h1>
        <div className="Gameboard--square-container">
        {this.state.gameboard.map((stat, i) => {
          return <Square
            toggleLight={this.toggleLight}
            id={i + '-square'}
            num={i}
            key={i + '-square'}
            pos={stat}
            onStat={Math.random() < 0.4 ? true : false}
          />

        })}
        </div>
      </div>
    )
  }
}

export default Gameboard;
