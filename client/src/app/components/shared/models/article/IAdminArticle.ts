export default interface IAdminArticle {
  id: string;
  title: string;
  picture: string;
  categoryId: string;
  categoryName: string;
  likesCount: number;
  commentsCount: number;
}
