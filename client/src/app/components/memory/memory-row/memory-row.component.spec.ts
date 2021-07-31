import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryRowComponent } from './memory-row.component';

describe('MemoryRowComponent', () => {
  let component: MemoryRowComponent;
  let fixture: ComponentFixture<MemoryRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemoryRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoryRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
