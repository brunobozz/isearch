import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GooglesearchService } from './googlesearch/googlesearch.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    GooglesearchService
  ]
})
export class ServicesModule { }