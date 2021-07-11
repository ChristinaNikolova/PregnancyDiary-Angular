import IArticle from 'src/app/components/shared/models/article/IArticle';
import { asyncData } from '../../helpers/asyncDataTesting';
import { ArticlesService } from './articles.service';

fdescribe('ArticlesService', () => {
  let httpClientSpy: {get: jasmine.Spy, post: jasmine.Spy}
  let service: ArticlesService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    service=new ArticlesService(<any> httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all articles', (done) => {
    let expectedArticles: IArticle[] = [
      {
        id: '1',
        title: 'title 1',
        picture: '',
        categoryId: '1',
        categoryName: 'test category',
        likesCount: 1,
        commentsCount: 1,
        content: 'test content',
        shortContent: 'test content',
        createdOnAsString: '10.07.2021',
      },
      {
        id: '2',
        title: 'title 2',
        picture: '',
        categoryId: '1',
        categoryName: 'test category',
        likesCount: 2,
        commentsCount: 2,
        content: 'test content',
        shortContent: 'test content',
        createdOnAsString: '09.07.2021',
      },
    ];

    httpClientSpy.get.and.returnValue(asyncData(expectedArticles));
    service.all().subscribe((actualResult) =>{
      expect(actualResult).toEqual(expectedArticles)
    });
    done();
  });

  it('should return ordered articles', (done) => {
    let expectedArticles: IArticle[] = [
      {
        id: '2',
        title: 'title 2',
        picture: '',
        categoryId: '1',
        categoryName: 'test category',
        likesCount: 2,
        commentsCount: 2,
        content: 'test content',
        shortContent: 'test content',
        createdOnAsString: '09.07.2021',
      },
      {
        id: '1',
        title: 'title 1',
        picture: '',
        categoryId: '1',
        categoryName: 'test category',
        likesCount: 1,
        commentsCount: 1,
        content: 'test content',
        shortContent: 'test content',
        createdOnAsString: '10.07.2021',
      },
    ];

    httpClientSpy.get.and.returnValue(asyncData(expectedArticles));
    service.order('likes').subscribe((actualResult) =>{
      expect(actualResult).toEqual(expectedArticles);
    });
    done();
  });
});
