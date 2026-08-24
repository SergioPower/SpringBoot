import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../models/product';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'product-form',
  templateUrl: './form.html',
})
export class Form {
  @Input() product: Product = {
    id: 0,
    name: '',
    description: '',
    price: 0
  }

  @Output() addProductEvent = new EventEmitter();
  onSubmit(productForm: NgForm): void {
    if (productForm.valid) {
      console.log(this.product)
      this.addProductEvent.emit(this.product)
      this.clean()
      productForm.reset()
      productForm.resetForm()
    }
  }

  clean(): void {
    this.product = {
      id: 0,
      name: '',
      description: '',
      price: 0
    }
  }

}
