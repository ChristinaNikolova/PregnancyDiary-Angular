import { Component, Input, OnInit } from '@angular/core';

import IAdminArticle from 'src/app/components/shared/models/article/IAdminArticle';

@Component({
  selector: '[app-article-single-row]',
  templateUrl: './article-single-row.component.html',
  styleUrls: ['./article-single-row.component.css'],
})
export class ArticleSingleRowComponent implements OnInit {
  @Input() article: IAdminArticle;

  constructor() {}

  ngOnInit(): void {}

  remove(): void {
    console.log('in remove');
  }
}
