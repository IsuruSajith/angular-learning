import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchText: any='';

  updateSearch(event: any) {
    this.searchText=event.target.value;
  }
}
