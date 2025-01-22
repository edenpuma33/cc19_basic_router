import usePumaStore from "../store/pumaStore"

function EasyZustand() {
    // javascript


    // Step 2 Use State
    const firstName = usePumaStore((state)=>state.firstName)
    const address = usePumaStore((state)=>state.address)
    const profile = usePumaStore((state)=>state.profile)
    const products = usePumaStore((state)=>state.products)
    const number = usePumaStore((state)=>state.number)
    const actionIncrease = usePumaStore((state)=>state.actionIncrease)
    const actionDecrease = usePumaStore((state)=>state.actionDecrease)
    const actionMultiply = usePumaStore((state)=>state.actionMultiply)
    const actionDivide= usePumaStore((state)=>state.actionDevide)
    const actionGoal = usePumaStore((state)=>state.actionGoal)
    const goal = usePumaStore((state)=>state.goal)
    console.log(goal)
  return (
    <div>
        {/* EasyZustand
        <p>{profile[0]}</p>
        <p>{address.zipcode}</p>
        <p>{products[3].title} price: {products[3].price}</p>
        <p>pumaStore = {JSON.stringify(products)}</p> */}
        <p className="text-8xl">{number}</p>
        <button onClick={actionIncrease} className="bg-fuchsia-400">Increase</button>
        <br/>
        <button onClick={actionDecrease} className="bg-fuchsia-400">Decrease</button>
        <br/>
        <button onClick={actionMultiply} className="bg-fuchsia-400">Multiply</button>
        <br/>
        <button onClick={actionDivide} className="bg-fuchsia-400">Divide</button>
        <br/>
        <p className="text-3xl cursor-pointer" onClick={actionGoal}>{goal}</p>
    </div>
  )
}
export default EasyZustand