import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstaSearchComponent } from './insta-search.component';

describe('InstaSearchComponent', () => {
  let component: InstaSearchComponent;
  let fixture: ComponentFixture<InstaSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstaSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstaSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
