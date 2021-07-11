import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import IAdminArticle from 'src/app/components/shared/models/article/IAdminArticle';
import { asyncData } from 'src/app/core/helpers/asyncDataTesting';
import { ArticlesService } from 'src/app/core/services/articles/articles.service';
import { AllArticlesComponent } from './all-articles.component';

fdescribe('AllArticlesComponent', () => {
  let component: AllArticlesComponent;
  let fixture: ComponentFixture<AllArticlesComponent>;
  let articlesService: ArticlesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllArticlesComponent],
      imports: [HttpClientModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllArticlesComponent);
    articlesService = TestBed.inject(ArticlesService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get all articles for admin', async () => {
    let actualData = fixture.nativeElement.querySelector('tbody');
    const expectedData: IAdminArticle[] = [
      {
        id: '1',
        title: 'Test Title 1',
        picture: '',
        categoryId: '1',
        categoryName: 'Test Category',
        likesCount: 1,
        commentsCount: 2,
      },
      {
        id: '2',
        title: 'Test Title 2',
        picture: '',
        categoryId: '1',
        categoryName: 'Test Category',
        likesCount: 2,
        commentsCount: 3,
      },
    ];

    const spy = spyOn(
      articlesService,
      'getAllForAdministration'
    ).and.returnValue(asyncData(expectedData));

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(actualData).toEqual(expectedData);
    });
  });
});
