import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavourireArticlesRowComponent } from './favourire-articles-row.component';

describe('FavourireArticlesRowComponent', () => {
  let component: FavourireArticlesRowComponent;
  let fixture: ComponentFixture<FavourireArticlesRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavourireArticlesRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavourireArticlesRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
