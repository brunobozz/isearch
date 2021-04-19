import { Component, OnInit } from '@angular/core';
import { ModelProfile } from 'src/app/models/model-profile';
import { GooglesearchService } from 'src/app/services/googlesearch/googlesearch.service';

@Component({
  selector: 'app-insta-search',
  templateUrl: './insta-search.component.html',
  styleUrls: ['./insta-search.component.scss'],
})
export class InstaSearchComponent implements OnInit {
  public modelProfile: ModelProfile;

  public profiles: any[] = [];
  public newProfiles: any[] = [];
  public emailsLista: string = '';
  public emailsArray: string[] = [];
  public start: number = 1;
  public term: string = '';
  public titleArray: string[] = [];

  constructor(
    private GooglesearchService: GooglesearchService
    ) {
      // this.modelProfile = new Model();
    }

  ngOnInit(): void {}

  public searchValue(value: string) {
    this.start = 1;
    this.term = value;
    this.emailsLista = '';
    this.emailsArray = [];
    this.googleSearch(this.term, this.start.toString());
  }

  carregarMais() {
    this.start = this.start + 10;
    this.googleSearch(this.term, this.start.toString());
  }

  public googleSearch(term: string, start: string) {
    this.GooglesearchService.getSearch(term, start).subscribe((res: any) => {
      // this.profiles = this.profiles.concat(res.items);
      this.profiles = res.items;
      this.extractEmail(this.profiles);
      // this.ajustaTitle(this.profiles);
    });
  }

  private extractEmail(value: any[]) {
    let regex = /\S+[a-z0-9]@[a-z0-9\.]+/gim;
    value.forEach((element) => {
      let email = element.snippet.match(regex); // extrai email da string
      if (email != null) {
        email = this.limpaEmail(email);
        var email2 = email.filter((este, i) => email.indexOf(este) === i); // remove email repetido
        this.emailsLista += email2 + ', \n';
        this.emailsArray = this.emailsArray.concat(email2);
      }
    });
  }

  // private ajustaTitle(value: any[]) {
  //   value.forEach((element) => {
  //     let title = element.title.split('•', 1);
  //     this.profiles[item].title(title);
  //   });
  // }

  private limpaEmail(value) {
    let email = value.map((e) => {
      return e[e.length - 1] === '.' ? e.substring(e.length - 1, 0) : e; // remove o ponto final do email caso tenha
    });
    return email;
  }
}
