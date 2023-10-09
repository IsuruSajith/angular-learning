import { Component } from '@angular/core';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent {
  searchText: string= '';
  updateSearchText(event: any) {
    this.searchText = event.target.value;
  }

}
