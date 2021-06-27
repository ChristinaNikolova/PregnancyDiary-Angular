import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { UsersService } from 'src/app/core/services/users/users.service';
import IFavArticle from '../../shared/models/article/IFavArticle';

@Component({
  selector: 'app-favourite-articles',
  templateUrl: './favourite-articles.component.html',
  styleUrls: ['./favourite-articles.component.css'],
})
export class FavouriteArticlesComponent implements OnInit {
  favArticles$: Observable<IFavArticle[]>;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.reload();
  }

  reload(): void {
    this.favArticles$ = this.usersService.getFavouriteArticles();
  }
}
