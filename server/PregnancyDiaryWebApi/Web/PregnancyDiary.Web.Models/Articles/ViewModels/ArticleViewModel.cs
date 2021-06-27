namespace PregnancyDiary.Web.Models.Articles.ViewModels
{
    using System;

    using PregnancyDiary.Data.Models;
    using PregnancyDiary.Services.Mapping;

    public class ArticleViewModel : ArticleBaseViewModel, IMapFrom<Article>
    {
        public string Content { get; set; }

        public string ShortContent
            => this.Content.Length >= 250
            ? this.Content.Substring(0, 250)
            : this.Content.Substring(0, this.Content.Length);

        public DateTime CreatedOn { get; set; }

        public string CreatedOnAsString
            => this.CreatedOn.ToShortDateString();
    }
}
