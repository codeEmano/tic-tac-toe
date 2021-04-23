import Game from './Game'
//import {useState} from 'react'
function App() {
  /*const [p1,setP]=useState("");
  const [p2,setP]=useState("");
  const [p1Choice,setP]=useState("");
  const [p2Choice,setP]=useState("")
 handleChange= (e) => {
  const {name,value}=e.target;
  setP({[name]:value})
 }
 handleSubmit= () =>
 {
   <Game p1={p1} p2={p2} p1Choice={p1Choice} p2Choice={p2Choice}/>
 }
  return (
    <form onSubmit={handleSubmit}>
      <label>Player1 name:</label> <input type="text" name="p1" value={p1}
      onChange={handleChange} />
      <br />
      <label>Player1 choice:</label>  
      <select value={p1Choice} onChange={handleChange} name="p1Choice">
        <option value='x'>x</option>
        <option value='o'>o</option>
      </select>
      <br />
      <br />
      <label>Player2 name:</label> <input type="text" name="p2" value={p2} 
      onChange={handleChange} />
      <br />
      <label>Player2 choice:</label>
      <select value={p2Choice} onChange={handleChange} name="p2Choice">
        <option value='x'>x</option>
        <option value='o'>o</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );*/
  return <div>
    <Game />
    {console.log("App.js")}
  </div>
}

export default App;
