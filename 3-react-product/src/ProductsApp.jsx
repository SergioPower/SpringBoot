import PropTypes from "prop-types"
import { ProductTable } from "./componentes/ProductTable"
import { ProductForm } from "./componentes/ProductForm"
import { useEffect, useState } from "react"

const initProducts = [{
  id: 1,
  name: 'Monitor Asus 37 pulgadas',
  description: "El monitor es perfecto para juegos",
  price: 1000
},{
  id: 2,
  name: 'Iphone 16 pro',
  description: "El telefono es excelente e incluye Apple Intelligence!",
  price: 45000
},
]

export const ProductsApp = ({title}) => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(initProducts);
    console.log('cargando la página ...')
  }, [])

  const handlerAddProduct = (product) => {
    setProducts([...products, {...product, id: Date.now()}])
  }

  return <div className='container my-4' >
    <h2>{title}</h2>
    <div className="row">
      <div className="col">
          <div className="col">
            <ProductForm  handlerAdd={handlerAddProduct}/>
          </div>
          <div className="col">
          <ProductTable products={products} />
          </div>
      </div>
    </div>
  </div>
}

ProductsApp.propTypes = {
  title: PropTypes.string.isRequired
}