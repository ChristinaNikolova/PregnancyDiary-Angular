import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySingleRowComponent } from './category-single-row.component';

describe('CategorySingleRowComponent', () => {
  let component: CategorySingleRowComponent;
  let fixture: ComponentFixture<CategorySingleRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorySingleRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorySingleRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
