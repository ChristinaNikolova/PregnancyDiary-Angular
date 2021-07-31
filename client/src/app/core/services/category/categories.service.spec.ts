import ICategory from 'src/app/components/shared/models/category/ICategory';
import { asyncData } from '../../helpers/asyncDataTesting';

import { CategoriesService } from './categories.service';

fdescribe('CategoriesService', () => {
  let httpClientSpy: { get: jasmine.Spy; post: jasmine.Spy };
  let service: CategoriesService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    service = new CategoriesService(<any>httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all articles count by categories', (done) => {
    let expectedCategories: ICategory[] = [
      {
        id: '1',
        name: 'Test Category 1',
        articlesCount: 12,
      },
      {
        id: '2',
        name: 'Test Category 2',
        articlesCount: 2,
      },
    ];

    httpClientSpy.get.and.returnValue(asyncData(expectedCategories));
    service.getArticlesCountByCategories().subscribe((actualResult) => {
      expect(actualResult).toEqual(expectedCategories);
    });
    done();
  });
});
