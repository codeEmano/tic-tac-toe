const decideWinner= (sqr) =>{
  console.log("decideWinner.js")
    let winner='';
    let flag1=false;
    let flag2=false;
    const winCombo=[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  for(let i=0;i<winCombo.length;i++)
  {
      const [a,b,c]=winCombo[i]
      if(!(sqr[a] && sqr[b] && sqr[c]))
      {
        flag1=true;
      }
      if(sqr[a] && sqr[a]===sqr[b] && sqr[a]===sqr[c])
        {
          flag2=true;
         winner= sqr[a]
        }
      
  }
  if(flag2)
  {
      return winner;
  }
  else if(flag1)
   {
      return null
    }
  else
  {
    return "no one"
  }

}
export default decideWinner