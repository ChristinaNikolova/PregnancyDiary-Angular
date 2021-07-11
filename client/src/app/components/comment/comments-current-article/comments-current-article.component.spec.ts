import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { asyncData } from 'src/app/core/helpers/asyncDataTesting';
import { CommentsService } from 'src/app/core/services/comments/comments.service';
import IComment from '../../shared/models/comment/IComment';
import { CommentsCurrentArticleComponent } from './comments-current-article.component';

fdescribe('CommentsCurrentArticleComponent', () => {
  let component: CommentsCurrentArticleComponent;
  let fixture: ComponentFixture<CommentsCurrentArticleComponent>;
  let commentsService: CommentsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommentsCurrentArticleComponent],
      imports: [HttpClientModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsCurrentArticleComponent);
    commentsService = TestBed.inject(CommentsService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get all comments current category', async () => {
    let actualData = fixture.nativeElement.querySelector('comments');
    const expectedData: IComment[] = [
      {
        id: '1',
        content: 'test content 1',
        userUserName: 'test user',
        createdOn: '11.07.2021',
        createdOnAsString: '11.07.2021',
      },
      {
        id: '2',
        content: 'test content 2',
        userUserName: 'test user',
        createdOn: '11.07.2021',
        createdOnAsString: '11.07.2021',
      },
    ];

    const spy = spyOn(commentsService, 'getForCurrentArticle').and.returnValue(
      asyncData(expectedData)
    );

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(actualData).toEqual(expectedData);
    });
  });
});
