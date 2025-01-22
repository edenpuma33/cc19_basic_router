import { useState } from "react"

function RecapUseState() {

  const num = 6
  const [number,setNumber] = useState(4)
  console.log(number)

  const hdlIncrease = () =>{
    console.log('Easy, useState')
  }
  return (
    <div>
        <h1 className="text-8xl">{number}</h1>
        <br/>
        <button onClick={hdlIncrease} className="bg-green-500 p-2 rounded-md shadow-md
        hover:scale-105 hover:duration-300 hover:bg-green-700">Increase</button>
    </div>
  )
}
export default RecapUseState