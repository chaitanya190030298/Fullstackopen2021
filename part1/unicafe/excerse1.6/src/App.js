import React, { useState } from 'react'

const Button = ({NAME,val,setVal,all, setAll})=>{
    const setToVal = () => {
        setVal(val+1);
        setAll(all+1);
    }
    return(
    <button onClick={setToVal}>
        {NAME}
    </button>
    )
}
const Statistic = ({pref,val,post})=>(
    <tr>
        <td>{pref}</td> 
        <td>{val} {post}</td>
    </tr>
)
const Statistics = ({GOOD,BAD,NEUTRAL,all})=>{
    if(all===0){
        return (
        <div>
            No feedback given
        </div>
        )
    }
    return (
        <table>
            <tbody>
                <Statistic pref="GOOD" val={GOOD} />
                <Statistic pref="NEUTRAL" val={NEUTRAL} />
                <Statistic pref="BAD" val={BAD} />
                <Statistic pref="ALL" val={all} />
                <Statistic pref="average" val={(GOOD-BAD)/all} />
                <Statistic pref="positive" val={(GOOD/all)*100} post="%" />
            </tbody>
        </table>
    )
}
const App = () => {
  // save clicks of each button to own state
  const [GOOD, setGood] = useState(0)
  const [NEUTRAL, setNeutral] = useState(0)
  const [BAD, setBad] = useState(0)
  const [all, setAll] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button NAME="GOOD" val={GOOD} setVal={setGood} all={all} setAll={setAll}/>
      <Button NAME="NEUTRAL" val={NEUTRAL} setVal={setNeutral} all={all} setAll={setAll}/>
      <Button NAME="BAD" val={BAD} setVal={setBad} all={all} setAll={setAll}/>
      <h1>statistics</h1>
      <Statistics GOOD={GOOD} NEUTRAL={NEUTRAL} BAD={BAD} all={all} />
    </div>
  )
}


export default App