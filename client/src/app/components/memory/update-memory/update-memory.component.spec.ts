import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMemoryComponent } from './update-memory.component';

describe('UpdateMemoryComponent', () => {
  let component: UpdateMemoryComponent;
  let fixture: ComponentFixture<UpdateMemoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMemoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMemoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
