import Game from './Game'
import {useState} from 'react'
function App() {
  const [p1,setP1]=useState("");
  const [p2,setP2]=useState("");
  const [p1Choice, setp1Choice] = useState('o');
  const [p2Choice, setp2Choice] = useState('o');
  const [status, setstatus] = useState(false);
 const handleChange1= (e) => {
  const {value}=e.target;
  console.log(value);
  setP1(value)
 }
 const handleChange2= (e) => {
  const {value}=e.target;
  console.log(value);
  setP2(value)
 }
 const handleChoiceChange1 =(e) =>{
   console.log(e.target );
   setp1Choice(e.target.value)
 }
 const handleChoiceChange2 =(e) =>{
   console.log(e.target.value);
  setp2Choice(e.target.value)
}
 const handleSubmit= () =>
 {
  if(p1.length===0 || p2.length===0)
  {
    alert("Enter a valid Player name");
    return;
  }
  setstatus(true);
 }
  return <>
      {status ? <Game p1={p1} p2={p2} 
      p1Choice={p1Choice} p2Choice={p2Choice}/> : <form onSubmit={handleSubmit}>
      <label>Player 1 name:</label> <input type="text" name="p1" value={p1}
      onChange={handleChange1} required/>
      <br/>
      <br/>
      <label>Player 1 choice:</label>  
      <select value={p1Choice} onChange={handleChoiceChange1}>
        <option value='o' selected>o</option>
        <option value='x'>x</option>
      </select> 
      <br />
      <br />
      <hr/>
      <label>Player 2 name:</label> <input type="text" name="p2" value={p2} 
      onChange={handleChange2} />
      <br />
      <br/>
       <label>Player 2 choice:</label>
      <select value={p2Choice} onChange={handleChoiceChange2}>
      <option value='o' selected>o</option>
        <option value='x'>x</option>
      </select> 
      <br/>
      <br/>
      <button type="button" onClick={handleSubmit}>Play!</button> 
      </form>}
  </>;
}

export default App;
