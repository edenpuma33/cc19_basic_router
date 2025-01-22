import { useState } from "react"

function RecapUseState() {

  const num = 6
  const [number,setNumber] = useState(4)
  const [number2, setNumber2] = useState({
    num:5
  })
  console.log(number)
  console.log(number2.num)

  const hdlIncrease = () =>{
    console.log('Easy, useState')
    setNumber((prv)=>prv+1)
  }

  const hdlDecrease = () =>{
    setNumber((prv)=>prv-1)
  }

const hdlIncrease2 = () => {
    setNumber2((prev)=>({num: prev.num+1}))
}


const hdlDecrease2 = () => {
    setNumber2((prev)=>({num: prev.num-1}))
}

const hdlMultipy2 = () => {
    setNumber2((prev)=>({num: prev.num*2}))
}

const hdlDivide2= () => {
    setNumber2((prev)=>({num: prev.num/2}))
}




  return (
    <div>
        <h1 className="text-8xl">{number}</h1>
        <br/>
        <button onClick={hdlIncrease} className="bg-green-500 p-2 rounded-md shadow-md
        hover:scale-105 hover:duration-300 hover:bg-green-700">Increase</button>

        <button onClick={hdlDecrease} className="bg-green-500 p-2 rounded-md shadow-md
        hover:scale-105 hover:duration-300 hover:bg-green-700">Decrease</button>

        <hr/>
        <h1 className="text-8xl">{number2.num}</h1>
        <button onClick={hdlIncrease2} className="bg-green-500 p-2 rounded-md shadow-md
        hover:scale-105 hover:duration-300 hover:bg-green-700">+</button>
        <button onClick={hdlDecrease2} className="bg-green-500 p-2 rounded-md shadow-md
        hover:scale-105 hover:duration-300 hover:bg-green-700">-</button>
        <button onClick={hdlMultipy2} className="bg-green-500 p-2 rounded-md shadow-md
        hover:scale-105 hover:duration-300 hover:bg-green-700">x2</button>
        <button onClick={hdlDivide2} className="bg-green-500 p-2 rounded-md shadow-md
        hover:scale-105 hover:duration-300 hover:bg-green-700">/2</button>

    </div>
  )
}
export default RecapUseState