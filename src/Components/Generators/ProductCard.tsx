import { useAppContext } from "@/Context/AppContext"



function ProductCard() {
    const { products } = useAppContext()
    console.log(products)
  return (
    <div>ProductCard</div>
  )
}

export default ProductCard