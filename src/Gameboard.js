import React, { Component } from 'react';
import './Gameboard.css';
import Square from './Square.js';

class Gameboard extends Component {
  static defaultProps = {
    rows: 5,
    cols: 5,
    randLightsOn: 0.20
  };


  constructor(props){
    super(props);
    this.renderNewGame = this.renderNewGame.bind(this)
    // this.toggleLight = this.toggleLight.bind(this);

    this.state = {
        gameboard: this.renderNewGame(),
        moves: 0,
        hasWon: false
      }
  }


  renderNewGame() {
    let game = [];
    for(let i = 0; i < this.props.rows; i++){
      let row = [];
      for(let j = 0; j < this.props.cols; j++){
        row.push(Math.random() < this.props.randLightsOn)
      }
      game.push(row)
    }
    return game;
  }

  // toggleLight(sq){
  // }

  render(){
    let gameboard = [];
    for(let i = 0; i < this.props.rows; i++){
      let row = [];
      for(let j = 0; j < this.props.cols; j++){
        row.push(<Square isOn={this.state.gameboard[i][j]} />)
      }
      gameboard.push(<div className="Gameboard--row">{row}</div>)
    }
    return (
      <div className="Gameboard">
        <h1 className="Gameboard--heading">Lights Out</h1>
        <p className="Gameboard--text">Moves: {this.state.moves}</p>
        <div className="Gameboard--square-container">
          {gameboard}
        </div>
      </div>
    )
  }
}

export default Gameboard;
