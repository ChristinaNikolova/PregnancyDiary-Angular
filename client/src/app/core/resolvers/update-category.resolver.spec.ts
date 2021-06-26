import { TestBed } from '@angular/core/testing';

import { UpdateCategoryResolver } from './update-category.resolver';

describe('UpdateCategoryResolver', () => {
  let resolver: UpdateCategoryResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(UpdateCategoryResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
