import PropTypes from "prop-types"
import { ProductTable } from "./componentes/ProductTable"
import { ProductForm } from "./componentes/ProductForm"
import { useEffect, useState } from "react"

const initProducts = [{
  id: 1,
  name: 'Monitor Asus 37 pulgadas',
  description: "El monitor es perfecto para juegos",
  price: 1000
}, {
  id: 2,
  name: 'Iphone 16 pro',
  description: "El telefono es excelente e incluye Apple Intelligence!",
  price: 45000
},
]

export const ProductsApp = ({ title }) => {

  const [products, setProducts] = useState([])
  const [productSelected, setproductSelected] = useState({
    id: 0,
    name: '',
    description: '',
    price: ''
  })

  useEffect(() => {
    setProducts(initProducts);
    console.log('cargando la página ...')
  }, [])

  const handlerAddProduct = (product) => {
    if (product.id > 0) {
      setProducts(
        products.map(p => {
          if (p.id === product.id) {
            return { ...product }
          }
          return p
        })
      )
    } else {
      setProducts([...products, { ...product, id: Date.now() }])
    }
  }

  const handlerProductSelected = (product) => {
    setproductSelected({ ...product })
    console.log(productSelected)
  }

  const handlerRemoveProduct = (id) => {
    setProducts(products.filter(p => p.id !== id))
  }

  return <div className='container my-4' >
    <h2>{title}</h2>
    <div className="row">

      <div className="col">
        <ProductForm handlerAdd={handlerAddProduct} productSelected={productSelected} />
      </div>
      <div className="col">
        {
          products.length > 0 ?
            <ProductTable products={products} handlerProductSelected={handlerProductSelected} 
            handlerRemoveProduct={handlerRemoveProduct} 
            />
            :
            <div className="alert alert-warning" role="alert">
              No hay productos para mostrar
            </div>
        }
      </div>

    </div>
  </div>
}

ProductsApp.propTypes = {
  title: PropTypes.string.isRequired
}