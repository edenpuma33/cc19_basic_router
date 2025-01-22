import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import useProductStore from "../store/product-store";
import { IconButton } from "@material-tailwind/react";

function ProductCard(props) {
    const {product} = props
    const actionAddtoCart = useProductStore((state)=>state.actionAddtoCart)
    const actionRemoveProduct = useProductStore((state)=>state.actionRemoveProduct)
  return (
    <Card className="w-48 m-1">
      <CardHeader shadow={false} floated={false} className="h-48">
        <img src={product.images[0]} className="h-vh w-full object-cover"/>
      </CardHeader>
      <CardBody>
        <div className="mb-6 flex items-center justify-between h-[48px]">
          <Typography color="blue-gray" className="font-medium text-sm">
            {product.title}
          </Typography>
          <Typography color="blue-gray" className="font-medium text-sm">
            ${product.price}
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75 text-xs"
        >
          {product.description.slice(0,30)+'...'}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0 flex flex-col gap-2">
        <IconButton className="rounded-full h-4 flex" onClick={()=>actionRemoveProduct(product.id)}> 
        -
        </IconButton>
        <Button
          onClick={()=>actionAddtoCart(product)}
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 h-10 flex justify-center">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}
export default ProductCard