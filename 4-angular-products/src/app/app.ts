import { Component, OnInit, signal } from '@angular/core';
import { Products } from './components/products';
import { Product } from './models/product';
import { Form } from './components/form';
import Swal from 'sweetalert2';
import { ProductService } from './services/productService';

@Component({
  imports: [Products, Form],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App  implements OnInit{
  
  products: Product[] = [];
  countId = signal(3)
  productSelected: Product = {
    id: 0,
    name: '',
    description: '',
    price: 0
  }


  constructor(private service: ProductService) {}

  ngOnInit(): void {

  this.service.findAll().subscribe(products => this.products = products)

    /*this.products = [
      {
        id: 1,
        name: 'Monitor Asus 35 pulgadas',
        description: 'El monitor es perfecto para juegos de alta resolución!',
        price: 1000
      },
      {
        id: 2,
        name: 'Iphone 16 pro',
        description: 'El Iphone 16 pro es perfecto para usuarios que buscan lo último en tecnología!',
        price: 45000
      },]*/
  }
 

  addProduct(product: Product): void {
    if (product.id > 0) {
      this.products = this.products.map(p => {
        if (p.id == product.id){
          return {...product};
        } 
        return p;
      });
      Swal.fire({
        title: "Producto actualizado con exito!",
        text: "Producto actualizado!",
        icon: "success"
      });
    } else {
      this.products = [... this.products, { ...product, id: this.countId()}]
      this.countId.update(id => id + 1)
      Swal.fire({
        title: "Producto creado!",
        text: "Producto creado con exito!",
        icon: "success"
      });
    }
  }

  onUpdateProductEvent(product: Product): void {
    this.productSelected = {...product}
  }

  onRemoveProductEvent(id: number): void {
    Swal.fire({
      title: "Estas seguro de eliminar?",
      text: "No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        this.products = this.products.filter(product => product.id != id)
        Swal.fire({
            title: "Producto eliminado!",
            text: "Producto eliminado con exito!",
            icon: "success"
          });
      }
    });
  }

}
