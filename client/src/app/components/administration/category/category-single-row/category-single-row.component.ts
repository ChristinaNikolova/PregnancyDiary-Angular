import { Component, Input, OnInit } from '@angular/core';
import IAdminCategory from 'src/app/components/shared/models/category/IAdminCategory';

@Component({
  selector: '[app-category-single-row]',
  templateUrl: './category-single-row.component.html',
  styleUrls: ['./category-single-row.component.css'],
})
export class CategorySingleRowComponent implements OnInit {
  @Input() category: IAdminCategory;

  constructor() {}

  ngOnInit(): void {}

  remove(): void {
    console.log('in remove');
  }
}
