import React, { useRef, useState } from 'react'

import './TicTacToe.css'                                                                 // CSS attachment
import cicle_icon from '../Assets/O.jpg'                                                 // Image attachment 1
import cross_icon from '../Assets/X.jpg'                                                 // Image attachment 1

let data = ["", "", "", "", "", "", "", "", ""]                                          // initialzing empty array for playing moves
const TicTacToe = () => {

  let [count,setCount] = useState(0);
  let [lock,setLock] = useState(false);
  let titleRef = useRef(null);
  let box1 = useRef(null);                                                               //Initialzing 9 boxex as null for reseting values after match
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);

  let box_array = [box1,box2,box3,box4,box5,box6,box7,box8,box9];


  const toggle = (e,num) =>{                                                             // toggle function contains method for                        
    if(lock){                                                                            // fetching image at target place
      return 0;
    }
    if(count%2==0){
      e.target.innerHTML = `<img src = '${cross_icon}'>`;
      data[num]="x";
      setCount(++count);
    }
    else{
      e.target.innerHTML = `<img src = '${cicle_icon}'>`;
      data[num]="o";
      setCount(++count);
    }
    checkWin();
  }

const checkWin = () => {                                                                 // if else loop is used to check variations of moves for winning 
  if(data[0]===data[1] && data[1]===data[2] && data[2]!==""){
    won(data[2]);
  }
  else if (data[3]===data[4] && data[4]===data[5] && data[5]!==""){
    won(data[5]);
  }
  else if (data[6]===data[7] && data[7]===data[8] && data[8]!==""){
    won(data[8]);
  }
  else if (data[0]===data[3] && data[3]===data[6] && data[6]!==""){
    won(data[6]);
  }
  else if (data[1]===data[4] && data[4]===data[7] && data[7]!==""){
    won(data[7]);
  }
  else if (data[2]===data[5] && data[5]===data[8] && data[8]!==""){
    won(data[8]);
  }
  else if (data[0]===data[4] && data[4]===data[8] && data[8]!==""){
    won(data[8]);
  }
  else if (data[0]===data[1] && data[1]===data[2] && data[2]!==""){
    won(data[2]);
  }
  else if (data[2]===data[4] && data[4]===data[6] && data[6]!==""){
    won(data[6]);
  }

}
const won = (winner) => {                                                                // won function used after match to display result
  setLock(true);
  if(winner==="x"){
    titleRef.current.innerHTML = `Congratulation: <img src = ${cross_icon}> Wins`;
  }
  else{
    titleRef.current.innerHTML = `Congratulation: <img src = ${cicle_icon}> Wins`;
  }
  }
  
  const reset = () => {                                                                  // reset function used to reset result and 9 boxes
    setLock(false);
    data = ["","","","","","","","",""];
    titleRef.current.innerHTML = 'Tic Tac Toe In <span>React</span>';
    box_array.map((e)=>{
      e.current.innerHTML = "";
    })
  }

  return (
    <div className='container'>
      <h1 className="title" ref={titleRef}>Tic Tac Toe Game In <span>React</span></h1>
      <div className="board">
        <div className="row1">
          <div className="boxes" ref={box1} onClick={(e)=>{toggle(e,0)}}></div>
          <div className="boxes" ref={box2} onClick={(e)=>{toggle(e,1)}}></div>
          <div className="boxes" ref={box3} onClick={(e)=>{toggle(e,2)}}></div>
        </div>
        <div className="row2">
          <div className="boxes" ref={box4} onClick={(e)=>{toggle(e,3)}}></div>
          <div className="boxes" ref={box5} onClick={(e)=>{toggle(e,4)}}></div>
          <div className="boxes" ref={box6} onClick={(e)=>{toggle(e,5)}}></div>
        </div>
        <div className="row3">
          <div className="boxes" ref={box7} onClick={(e)=>{toggle(e,6)}}></div>
          <div className="boxes" ref={box8} onClick={(e)=>{toggle(e,7)}}></div>
          <div className="boxes" ref={box9} onClick={(e)=>{toggle(e,8)}}></div>
        </div>
      </div>
      <button className="reset" onClick={()=>{reset()}}>Reset</button>                              
    </div>
  
  )
}

export default TicTacToe
