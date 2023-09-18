import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  name: string = 'iPhone 15';
  price: number = 999;
  color: string = 'black'
  discountedPrice: number=800;

  product = {
    phone : 'iphone',
    price: 1500,
    color: 'red',
    discount: 200
  }

  getDiscountedPercentage() {
    return ((this.price - this.product.discount)/this.price)*100;
  }
}
