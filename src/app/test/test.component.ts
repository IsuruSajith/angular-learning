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
  customerName:string='Isuru Sajith';

  product = {
    phone : 'iphone',
    price: 1500,
    color: 'red',
    discount: 200,
    inStock:10,
    pImage: 'assets/images/someimage.jpg'
  }

  getDiscountedPercentage() {
    return ((this.price - this.product.discount)/this.price)*100;
  }

  getName(event:any) {
    this.customerName= event.target.value;
  }
}
