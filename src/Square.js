import React from 'react'
const buttonStyle={
    background: 'papayawhip',
    border: '3px solid black',
    fontSize: '25px',
    fontWeight: '700',
    cursor:'pointer',
}
const square= (props) => (
<button style={buttonStyle} onClick={props.onClick}>{props.value}</button>
)
export default square