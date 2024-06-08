import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItewListComponent } from './itew-list.component';

describe('ItewListComponent', () => {
  let component: ItewListComponent;
  let fixture: ComponentFixture<ItewListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItewListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
