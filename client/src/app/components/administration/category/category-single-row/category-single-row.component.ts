import { Component, EventEmitter, Input, Output } from '@angular/core';
import IAdminCategory from 'src/app/components/shared/models/category/IAdminCategory';
import { CategoriesService } from 'src/app/core/services/category/categories.service';

@Component({
  selector: '[app-category-single-row]',
  templateUrl: './category-single-row.component.html',
  styleUrls: ['./category-single-row.component.css'],
})
export class CategorySingleRowComponent {
  @Input() category: IAdminCategory;
  @Output() deleteCategoryEventEmitter = new EventEmitter<void>();

  constructor(private categoriesService: CategoriesService) {}

  remove(): void {
    this.categoriesService.remove(this.category.id).subscribe((_) => {
      this.deleteCategoryEventEmitter.emit();
    });
  }
}
