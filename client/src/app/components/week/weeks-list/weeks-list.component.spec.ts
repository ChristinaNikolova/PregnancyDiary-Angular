import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeksListComponent } from './weeks-list.component';

describe('WeeksListComponent', () => {
  let component: WeeksListComponent;
  let fixture: ComponentFixture<WeeksListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeksListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
