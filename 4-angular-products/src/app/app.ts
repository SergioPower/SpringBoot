import { Component, OnInit, signal } from '@angular/core';
import { Products } from './components/products';
import { Product } from './models/product';

@Component({
  imports: [Products],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App  implements OnInit{
  products: Product[] = [];
  
  ngOnInit(): void {
    this.products = [
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
      },
    ]
  }
}
