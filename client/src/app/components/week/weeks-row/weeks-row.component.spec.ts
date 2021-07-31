import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeksRowComponent } from './weeks-row.component';

describe('WeeksRowComponent', () => {
  let component: WeeksRowComponent;
  let fixture: ComponentFixture<WeeksRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeksRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeksRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
