import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { FavouriteArticlesComponent } from './favourite-articles/favourite-articles.component';
import { FavourireArticlesRowComponent } from './favourire-articles-row/favourire-articles-row.component';
import { UserDiariesListComponent } from './user-diaries-list/user-diaries-list.component';
import { UserDiariesRowComponent } from './user-diaries-row/user-diaries-row.component';

@NgModule({
  declarations: [
    FavouriteArticlesComponent,
    FavourireArticlesRowComponent,
    UserDiariesListComponent,
    UserDiariesRowComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'favourite-articles', component: FavouriteArticlesComponent },
      { path: 'diaries', component: UserDiariesListComponent },
    ]),
    SharedModule
  ],
})
export class UserModule {}
