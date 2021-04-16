import { Component, OnInit } from '@angular/core';
import { GooglesearchService } from 'src/app/services/googlesearch/googlesearch.service';

@Component({
  selector: 'app-insta-search',
  templateUrl: './insta-search.component.html',
  styleUrls: ['./insta-search.component.scss']
})
export class InstaSearchComponent implements OnInit {

  private profiles: any[] = [];

  constructor(
    private GooglesearchService: GooglesearchService
  ) { }

  ngOnInit(): void {
  }

  public searchTerm(term: string) {
    this.GooglesearchService.getSearch(term).subscribe((res: any) => {
      this.profiles = res
      console.log(this.profiles)
    })
  }

}
