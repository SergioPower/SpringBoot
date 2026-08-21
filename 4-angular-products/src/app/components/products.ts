import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../models/product';

@Component({
  imports: [],
  selector: 'table-products',
  
  templateUrl: './products.html',
})
export class Products {

  @Input() products: Product[] = [];
  title = "Listado de productos";

  @Output() updateProductEvent = new EventEmitter()
  onUpdateProduct(product: Product): void {
    this.updateProductEvent.emit(product)
  }
  @Output() removeProductEvent = new EventEmitter()
  onRemoveProduct(id: number): void {
    this.removeProductEvent.emit(id)
  }
}
