import IArticle from './IArticle';

export default interface IArticleDetails extends IArticle {
  author: string;
  categoryId: string;
  isFavourite: boolean;
}
