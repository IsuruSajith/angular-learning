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
  discountedPrice: string=800;
}
