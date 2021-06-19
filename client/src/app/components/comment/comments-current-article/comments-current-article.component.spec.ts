import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsCurrentArticleComponent } from './comments-current-article.component';

describe('CommentsCurrentArticleComponent', () => {
  let component: CommentsCurrentArticleComponent;
  let fixture: ComponentFixture<CommentsCurrentArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentsCurrentArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsCurrentArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
