import { Component, OnInit } from '@angular/core';
import { GooglesearchService } from 'src/app/services/googlesearch/googlesearch.service';

@Component({
  selector: 'app-insta-search',
  templateUrl: './insta-search.component.html',
  styleUrls: ['./insta-search.component.scss'],
})
export class InstaSearchComponent implements OnInit {

  public profiles: any[] = []
  public newProfiles: any[] = []
  public email: string = ''
  public start: number = 1
  public term: string = ""

  constructor(private GooglesearchService: GooglesearchService) {}

  ngOnInit(): void {}

  public searchValue(value: string){
    console.log('1')
    this.start = 1
    this.term = value
    this.googleSearch(this.term, this.start.toString())
  }

  public carregarMais(){
    this.start++
    this.googleSearch(this.term, this.start.toString())
  }

  public googleSearch(term: string, start:string) {
    console.log('2')
    this.GooglesearchService.getSearch(term, start).subscribe((res: any) => {
      this.profiles = res.items;
      this.extractEmail(this.profiles);
      console.log(this.email);
    });
  }

  private extractEmail(value: any[]) {
    let regex = /\S+[a-z0-9]@[a-z0-9\.]+/gim;
    let emails: any[] = [];
    let i = 0;
    value.forEach((element) => {
      let ema = element.snippet.match(regex);
      if (ema != null && ema != 'undefined') {
        this.email += ema + ',';
      }
    });
  }
}
