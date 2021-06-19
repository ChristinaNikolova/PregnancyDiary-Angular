export default interface IArticle {
  id: string;
  title: string;
  content: string;
  shortContent: string;
  picture: string;
  categoryName: string;
  likesCount: number;
  commentsCount: number;
  createdOnAsString: string;
}
