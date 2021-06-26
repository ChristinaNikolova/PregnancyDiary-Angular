import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleSingleRowComponent } from './article-single-row.component';

describe('ArticleSingleRowComponent', () => {
  let component: ArticleSingleRowComponent;
  let fixture: ComponentFixture<ArticleSingleRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleSingleRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleSingleRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
