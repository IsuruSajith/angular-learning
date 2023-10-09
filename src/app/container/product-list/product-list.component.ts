import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
product = [{
 id : 1,
  name:"nike running shoe",
  description:"thoga seeminthai",
  brand:"nike",
  gender:"men",
  category: "running",
  size: [38, 39, 40, 41, 42],
  color:["white","black","green","blue"],
  price:160,
  is_in_inventory:true,
  items_left:3,
  imageURL: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Ftrainers-shoes&psig=AOvVaw3a1C5p1B3Jrc7FLXN4UkRw&ust=1696907818273000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIiFrK-A6IEDFQAAAAAdAAAAABAE",

}]
}
