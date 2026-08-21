import PropTypes from "prop-types"
import { ProductTable } from "./componentes/ProductTable"
import { ProductForm } from "./componentes/ProductForm"
import { useEffect, useState } from "react"
import { findAll, create, update, remove } from "./services/ProductService"
import Swal from 'sweetalert2'

/* const initProducts = [{
  id: 1,
  name: 'Monitor Asus 37 pulgadas',
  description: "El monitor es perfecto para juegos",
  price: 1000
}, {
  id: 2,
  name: 'Iphone 16 pro',
  description: "El telefono es excelente e incluye Apple Intelligence!",
  price: 45000
},] */

export const ProductsApp = ({ title }) => {

  const [products, setProducts] = useState([])
  const [productSelected, setproductSelected] = useState({
    id: 0,
    name: '',
    description: '',
    price: ''
  })

  const getProducts = async () => {
    const result = await findAll()
    setProducts(result.data);

  }

  useEffect(() => {
    getProducts();
    console.log('cargando la página ...')
  }, [])

  const handlerAddProduct = async (product) => {
  
    if (product.id > 0) {
      const response = await update(product)
      setProducts(
        products.map(p => {
          if (p.id === product.id) {
            return { ...response.data }
          }
          return p
        })
      )
      Swal.fire({
          title: "Actualizado con exito!",
          text:  `Producto ${product.name} creado con exito!`,
          icon: "success"
      })
    } else {
      const response = await create(product)
      setProducts([...products, { ...response.data }])
      Swal.fire({
          title: "Creado con exito!",
          text:  `Producto ${product.name} creado con exito!`,
          icon: "success"
      })
    }
  }

  const handlerProductSelected = (product) => {
    setproductSelected({ ...product })
    console.log(productSelected)
  }

  const handlerRemoveProduct = (id) => {
    Swal.fire({
        title: "estas seguro de eliminar?",
        text: "Cuidado va eliminar un producto del sistema!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar!",
        cancelButtonText: "Cancelar"
      }).then((result) => {
        if (result.isConfirmed) {
          remove(id)
          setProducts(products.filter(p => p.id !== id))
          Swal.fire({
          title: "Eliminado con exito!",
          text: "Producto eliminado con exito",
          icon: "success"
          });
        }
        
      });
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