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
  imageURL: "https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.jpg?s=612x612&w=0&k=20&c=A3w_a9q3Gz-tWkQL6K00xu7UHdN5LLZefzPDp-wNkSU=",

},

  {
    id : 2,
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
    imageURL: "https://img.freepik.com/free-photo/pair-trainers_144627-3800.jpg",

  }

]
}
