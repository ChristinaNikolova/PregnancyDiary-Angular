import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { asyncData } from 'src/app/core/helpers/asyncDataTesting';
import { CategoriesService } from 'src/app/core/services/categories/categories.service';
import ICategory from '../../shared/models/category/ICategory';
import { ArticlesCategoriesListComponent } from './articles-categories-list.component';

fdescribe('ArticlesCategoriesListComponent', () => {
  let component: ArticlesCategoriesListComponent;
  let fixture: ComponentFixture<ArticlesCategoriesListComponent>;
  let categoriesService: CategoriesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArticlesCategoriesListComponent],
      imports: [
        HttpClientModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesCategoriesListComponent);
    categoriesService = TestBed.inject(CategoriesService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get all categories', async () => {
    let actualData = fixture.nativeElement.querySelector('span');
    const expectedData: ICategory[] = [
      {
        id: '1',
        name: 'Test Category 1',
        articlesCount: 1,
      },
      {
        id: '2',
        name: 'Test Category 2',
        articlesCount: 2,
      },
    ];

    const spy = spyOn(
      categoriesService,
      'getArticlesCountByCategories'
    ).and.returnValue(asyncData(expectedData));

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(actualData).toEqual(expectedData);
    });
  });
});
