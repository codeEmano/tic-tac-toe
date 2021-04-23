import React,{useState} from 'react'
import Board from './Board'
import decideWinner from './decideWinner'
const Game= ({p1,p2,p1Choice,p2Choice}) => {
    const myStyle=
    {
        fontFamily:'cursive',
        cursor:'pointer'
    }
    const [p1Turn,setUser]=useState(true)
    const [brd,setBrd]=useState(Array(9).fill(null))
    const winner=decideWinner(brd)
    const handleClick= (i) =>{
        const cpy=[...brd]
        if(winner || cpy[i])
        {
            return
        }
        cpy[i]=p1Turn ? p1Choice : p2Choice;
        setBrd(cpy)
        setUser(!p1Turn)
    }
    const newGame= () => (
        <p align='center'><button style={myStyle} 
         onClick={() => setBrd(Array(9).fill(null))}>
            New Game</button>
            <br/><br/>
            {p1}:{p1Choice} <br /> <br/>{p2}:{p2Choice}
        </p>
    )
    return (
<div>
     {console.log("Game.js")}
        <Board squares={brd} onClick={handleClick}/>
     <p align='center' style={myStyle}>
     {winner ? 'Winner is : '+(winner===p1Choice? p1 : 
     winner===p2Choice ? p2: 'no one') : 'Next chance: '+(p1Turn ? p1 : p2)}
     </p>
     {newGame()}
</div>)
}
export default Game