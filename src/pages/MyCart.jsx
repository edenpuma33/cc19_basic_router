import ProductCard from "../components/ProductCard"
import useProductStore from "../store/product-store"

// rfce
function MyCart() {
    const cart = useProductStore((state)=>state.cart)
    const actionClear = useProductStore((state)=>state.actionClear)
    console.log(cart)
  return (
    <>
    <div className="flex flex-wrap justify-between">
        {cart.map((product)=>{
            return <ProductCard 
            key={product.id} 
            product={product}/>
        })}
    </div>
    <button onClick={actionClear}>Clear</button>
    </>
  )
}
export default MyCart