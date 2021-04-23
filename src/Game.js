import React,{useState} from 'react'
import Board from './Board'
import decideWinner from './decideWinner'
const Game= (/*props*/) => {
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
        cpy[i]=p1Turn ? 'x' : 'o'
        setBrd(cpy)
        setUser(!p1Turn)
    }
    const newGame= () => (
        <p align='center'><button style={myStyle} 
         onClick={() => setBrd(Array(9).fill(null))}>
            New Game</button>
        </p>
    )
    return (
<div>
     {console.log("Game.js")}
        <Board squares={brd} onClick={handleClick}/>
     <p align='center' style={myStyle}>
     {winner ? 'Winner is : '+winner : 'Next chance: '+(p1Turn ? 'x' : 'o')}
     </p>
     {newGame()}
</div>)
}
export default Game