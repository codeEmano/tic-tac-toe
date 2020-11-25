import React from 'react'
import Square from './Square'

const boardStyle={
border: '3px solid rebeccapurple',
borderRadius: '10px',
width: '125px',
height: '125px',
margin: '0 auto',
display: 'grid',
gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
}
const board=(props) => (
    <div style={boardStyle}>
        {props.squares.map((square,i) => (
            <Square key={i} value={square} onClick={() => props.onClick(i)} />
        ))}
    </div>
)
export default board