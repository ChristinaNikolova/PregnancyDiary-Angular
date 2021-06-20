import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import IAdminCategory from 'src/app/components/shared/models/category/IAdminCategory';
import { CategoriesService } from 'src/app/core/services/categories/categories.service';

@Component({
  selector: '[app-category-single-row]',
  templateUrl: './category-single-row.component.html',
  styleUrls: ['./category-single-row.component.css'],
})
export class CategorySingleRowComponent implements OnInit {
  @Input() category: IAdminCategory;
  @Output() deleteCategoryEventEmitter = new EventEmitter<void>();

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {}

  remove(): void {
    this.categoriesService.remove(this.category.id).subscribe((_) => {
       this.deleteCategoryEventEmitter.emit();
    });
  }
}
