import React,{useState} from 'react'
import Board from './Board'
import decideWinner from './decideWinner'
const Game= () => {
    const myStyle=
    {
        fontFamily:'cursive',
        cursor:'pointer'
    }
    const [xTurn,setUser]=useState(true)
    const [brd,setBrd]=useState(Array(9).fill(null))
    const winner=decideWinner(brd)
    const handleClick= (i) =>{
        const cpy=[...brd]
        if(winner || cpy[i])
        {
            return
        }
        cpy[i]=xTurn ? 'x' : 'o'
        setBrd(cpy)
        setUser(!xTurn)
    }
    const newGame= () => (
        <p align='center'><button style={myStyle} onClick={() => setBrd(Array(9).fill(null))}>New Game</button></p>
    )
    return (
<div>
        <Board squares={brd} onClick={handleClick}/>
    <p align='center' style={myStyle}>{winner ? 'Winner is : '+winner : 'Next chance: '+(xTurn ? 'x' : 'o')}</p>
    {newGame()}
</div>)
}
export default Game