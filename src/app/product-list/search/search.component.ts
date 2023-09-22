import { Component } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchText: any=''; // two way data binded

  searchItems: string[]=['iphone','redmi','huawei','oppo','nokia','samsung']

}
