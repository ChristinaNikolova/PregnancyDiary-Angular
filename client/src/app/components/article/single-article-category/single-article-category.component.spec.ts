import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleArticleCategoryComponent } from './single-article-category.component';

describe('SingleArticleCategoryComponent', () => {
  let component: SingleArticleCategoryComponent;
  let fixture: ComponentFixture<SingleArticleCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleArticleCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleArticleCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
