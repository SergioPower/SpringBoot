import { Component, signal } from '@angular/core';
import { Products } from './components/products';

@Component({
  imports: [Products],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = '4-angular-products';
}
