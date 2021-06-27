import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FavouriteArticlesComponent } from './favourite-articles/favourite-articles.component';
import { FavourireArticlesRowComponent } from './favourire-articles-row/favourire-articles-row.component';

@NgModule({
  declarations: [
    FavouriteArticlesComponent,
    FavourireArticlesRowComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'favourite-articles', component: FavouriteArticlesComponent },
    ]),
  ],
})
export class UserModule {}
