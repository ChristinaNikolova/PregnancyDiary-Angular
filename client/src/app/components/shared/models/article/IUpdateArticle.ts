import ICreateArticle from './ICreateArticle';

export default interface IUpdateArticle extends ICreateArticle {
  id: string;
}
