import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaristaListComponent } from './barista-list.component';

describe('BaristaListComponent', () => {
  let component: BaristaListComponent;
  let fixture: ComponentFixture<BaristaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaristaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaristaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
