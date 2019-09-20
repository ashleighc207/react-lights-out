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
    this.toggleLight = this.toggleLight.bind(this);

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

  toggleLight(pos){
    let {rows, cols} = this.props;
    let gameboard = this.state.gameboard;
    let [i, j] = pos.split('-').map(Number);

    function toggleSquare(i, j){
      if(j >= 0 && j < cols && i >= 0 && i < rows)new Promise((resolve, reject) => {
        gameboard[i][j] = !gameboard[i][j];
      })
    }

    toggleSquare(i, j) // Flip clicked cell
    toggleSquare(i + 1, j) // Flip above cell
    toggleSquare(i - 1, j) // Flip below cell
    toggleSquare(i, j + 1) // Flip right cell
    toggleSquare(i, j - 1) // Flip left cell

    let hasWon = gameboard.every(row => row.every(col => !col));

    this.setState({gameboard, hasWon, moves: this.state.moves + 1})
  }

  render(){
    let gameboard = [];
    for(let i = 0; i < this.props.rows; i++){
      let row = [];
      for(let j = 0; j < this.props.cols; j++){
        let pos = `${i}-${j}`;
        row.push(<Square key={pos} isOn={this.state.gameboard[i][j]} toggleLight={this.toggleLight} coord={pos}/>)
      }
      gameboard.push(<div className="Gameboard--row" key={i}>{row}</div>)
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
