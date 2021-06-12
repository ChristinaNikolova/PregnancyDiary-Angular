import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesCategoriesListComponent } from './articles-categories-list.component';

describe('ArticlesCategoriesListComponent', () => {
  let component: ArticlesCategoriesListComponent;
  let fixture: ComponentFixture<ArticlesCategoriesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlesCategoriesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesCategoriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
