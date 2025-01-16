import React from 'react'
import './TicTacToe.css'
import cicle_icon from '../Assets/O.jpg'
import cross_icon from '..//Assets/X.jpg' 

const TicTacToe = () => {
  return (
    <div className='container'>
      <h1 className="title">Tic Tac Toe Game In <span>React</span></h1>
      <div className="board">
      </div>
      <button className="reset">Reset</button>
    </div>
  )
}

export default TicTacToe
