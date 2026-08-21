import { Component, Input } from '@angular/core';
import { Product } from '../models/product';

@Component({
  imports: [],
  selector: 'table-products',
  
  templateUrl: './products.html',
})
export class Products {

  @Input() products: Product[] = [];
  title = "Listado de productos";
}
