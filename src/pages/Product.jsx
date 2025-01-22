// rfce
import { useEffect } from "react";
import useProductStore from "../store/product-store"
import ProductCard from "../components/ProductCard";
function Product() {
    const products = useProductStore((state)=>state.products);
    const actionGetData = useProductStore((state)=>state.actionGetData);
    
    useEffect(()=>{
        actionGetData()
    },[])
  return (
    <div>
        <div className="flex flex-wrap justify-between">
        {products?.map((product)=>{
            return <ProductCard key={product.id} product={product}/>
        })
    }
     </div>
    </div>
  )
}
export default Product