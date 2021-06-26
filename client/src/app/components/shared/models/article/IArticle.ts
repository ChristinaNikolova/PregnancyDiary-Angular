import IAdminArticle from './IAdminArticle';

export default interface IArticle extends IAdminArticle {
  content: string;
  shortContent: string;
  createdOnAsString: string;
}
