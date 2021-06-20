import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import IAdminCategory from 'src/app/components/shared/models/category/IAdminCategory';
import { CategoriesService } from 'src/app/core/services/categories/categories.service';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.css']
})
export class AllCategoriesComponent implements OnInit {
categories$: Observable<IAdminCategory[]>;

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.categories$ = this.categoriesService.getAllForAdministration();
  }

}
